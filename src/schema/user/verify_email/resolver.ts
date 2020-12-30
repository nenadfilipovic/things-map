import { raw } from 'objection';
import { GENERIC_ERROR } from 'src/constants';
import { User } from 'src/database/models/User';
import { Resolvers, VerifyEmailResult } from 'src/types';
import { clearAuthenticationToken } from 'src/services/authentication';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Verify email address.
     */

    verifyEmail: async (_, { input }, { ctx }): Promise<VerifyEmailResult> => {
      /**
       * Prepare data.
       */

      const { verifyEmailToken } = input;

      /**
       * Find user by provided token and check token
       * expiration date.
       */

      const [user] = await User.query()
        .allowGraph('[metadata,token]')
        .withGraphJoined('[metadata,token]')
        .where('token.verifyEmailToken', verifyEmailToken)
        .andWhere('token.verifyEmailTokenExpires', '>', new Date());

      if (user) {
        /**
         * Prepare data.
         */

        const { isVerified } = user.metadata;

        if (isVerified) {
          return {
            errors: [
              {
                __typename: 'Error',
                message: 'Email already verified',
              },
            ],
          };
        }

        /**
         * Update user data.
         */

        try {
          await User.transaction(async (trx) => {
            await user.$relatedQuery('metadata', trx).patch({
              isVerified: true,
              emailVerifiedDate: new Date(),
            });

            await user.$relatedQuery('token', trx).patch({
              verifyEmailToken: raw('NULL'),
              verifyEmailTokenTarget: raw('NULL'),
              verifyEmailTokenExpires: raw('NULL'),
            });

            return true;
          });

          clearAuthenticationToken(ctx);

          return {
            message:
              'You have successfully verified your email address, please sign in',
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
