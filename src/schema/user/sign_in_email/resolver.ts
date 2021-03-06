import { Resolvers } from 'src/types';
import { User } from 'src/database/models/User';
import { validatePassword } from 'src/services/password';
import { BAD_CREDENTIALS, GENERIC_ERROR } from 'src/constants';
import { buildAuthenticationToken } from 'src/services/authentication';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Sign in user by email.
     */

    signInByEmail: async (_, { input }, { ctx }) => {
      /**
       * Prepare data.
       */

      const { email, password } = input;

      /**
       * Check if user exist.
       */

      const [user] = await User.query()
        .allowGraph('metadata')
        .withGraphJoined('metadata')
        .where('metadata.email', email)
        .andWhere('metadata.isVerified', true);

      if (user) {
        /**
         * Prepare data.
         */

        const { id, metadata } = user;

        /**
         * Validate password.
         */

        const validPassword = await validatePassword(
          metadata.password,
          password,
        );

        if (!validPassword) {
          return {
            errors: [{ __typename: 'Error', message: BAD_CREDENTIALS }],
          };
        }

        try {
          await User.transaction(async (trx) => {
            return await user.$relatedQuery('metadata', trx).patch({
              lastSignInDate: new Date(),
              signInCount: metadata.signInCount + 1,
              lastSignInIpAddress: ctx.req.connection.remoteAddress,
            });
          });

          /**
           * Create authentication token for user.
           */

          buildAuthenticationToken(ctx, {
            id,
            isVerified: metadata.isVerified,
          });

          return {
            user,
            message: 'Successfully signed in',
          };
        } catch {
          return {
            errors: [{ __typename: 'Error', message: GENERIC_ERROR }],
          };
        }
      }

      return {
        errors: [{ __typename: 'Error', message: BAD_CREDENTIALS }],
      };
    },
  },
};

export default resolvers;
