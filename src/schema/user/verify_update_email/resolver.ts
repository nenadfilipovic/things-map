import { raw } from 'objection';
import { GENERIC_ERROR } from 'src/constants';
import { User } from 'src/database/models/User';
import { Resolvers, VerifyUpdateEmailResult } from 'src/generated';
import { clearAuthenticationToken } from 'src/services/authentication';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Verify user's update email address.
     */

    verifyUpdateEmail: async (
      _,
      { input },
      { ctx },
    ): Promise<VerifyUpdateEmailResult> => {
      /**
       * Prepare data.
       */

      const { verifyUpdateEmailToken } = input;

      /**
       * Find user by provided token and check token
       * expiration date.
       */

      const [user] = await User.query()
        .allowGraph('[metadata,tokens]')
        .withGraphJoined('[metadata,tokens]')
        .where('tokens.updateEmailToken', verifyUpdateEmailToken)
        .andWhere('tokens.updateEmailTokenExpires', '>', new Date());

      console.log(user);

      if (user) {
        /**
         * Prepare data.
         */

        const { updateEmailTokenTarget } = user.tokens;

        /**
         * Update user data.
         */

        try {
          const transaction = await User.transaction(async (trx) => {
            await user
              .$relatedQuery('metadata', trx)
              .patch({ email: updateEmailTokenTarget });

            await user.$relatedQuery('tokens', trx).patch({
              updateEmailToken: raw('NULL'),
              updateEmailTokenTarget: raw('NULL'),
              updateEmailTokenExpires: raw('NULL'),
            });

            return true;
          });

          clearAuthenticationToken(ctx);

          return {
            message:
              'You have successfully updated your email address, please sign in',
          };
        } catch {
          return {
            errors: [
              {
                __typename: 'Error',
                message: GENERIC_ERROR,
              },
            ],
          };
        }
      }

      return {
        errors: [
          {
            __typename: 'Error',
            message: 'Invalid or expired email verification token',
          },
        ],
      };
    },
  },
};

export default resolvers;
