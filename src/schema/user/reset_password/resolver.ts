import { raw } from 'objection';
import { config } from 'src/config';
import { Resolvers } from 'src/types';
import { mail } from 'src/services/mail';
import { GENERIC_ERROR } from 'src/constants';
import { User } from 'src/database/models/User';
import { hashPassword } from 'src/services/password';
import { generateRandomToken } from 'src/services/generator';
import { clearAuthenticationToken } from 'src/services/authentication';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Reset user's password.
     */

    resetPassword: async (_, { input }, { ctx }) => {
      /**
       * Prepare data.
       */

      const { resetPasswordToken } = input;

      /**
       * Find user by provided token and check token
       * expiration date.
       */

      const [user] = await User.query()
        .allowGraph('[metadata,tokens]')
        .withGraphJoined('[metadata,tokens]')
        .where('tokens.resetPasswordToken', resetPasswordToken)
        .andWhere('tokens.resetPasswordTokenExpires', '>', new Date());

      /**
       * If token doesn't exist or is invalid return message.
       */

      if (user) {
        /**
         * Prepare data.
         */

        const { email } = user.metadata;

        /**
         * Reset helper variables, create new password and update user data.
         */

        const password = generateRandomToken();

        try {
          await User.transaction(async (trx) => {
            await user.$relatedQuery('metadata', trx).patch({
              lastPasswordChangedDate: new Date(),
              password: await hashPassword(password),
            });

            await user.$relatedQuery('tokens', trx).patch({
              resetPasswordToken: raw('NULL'),
              resetPasswordTokenExpires: raw('NULL'),
            });

            return true;
          });

          /**
           * Send new password to user.
           */

          mail.sendMail({
            from: config.EMAIL_USERNAME,
            to: email,
            subject: `Password reset`,
            text: `Your password has been reset successfully.
            \n Here is your new password: ${password}`,
          });

          /**
           * Deauthenticate user.
           */

          clearAuthenticationToken(ctx);

          return {
            message: 'Please check your email address for your new password',
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
            message:
              'Your password reset token is invalid or expired, please generate new one',
          },
        ],
      };
    },
  },
};

export default resolvers;
