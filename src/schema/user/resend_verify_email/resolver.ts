import { mail } from 'src/services/mail';
import { GENERIC_ERROR } from 'src/constants';
import { formatDate } from 'src/services/date';
import { User } from 'src/database/models/User';
import { config, verifyEmailTokenMaxAge } from 'src/config';
import { generateRandomToken } from 'src/services/generator';
import { ResendVerifyEmailResult, Resolvers } from 'src/types';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Resend verification email.
     */

    resendVerifyEmail: async (
      _,
      { input },
    ): Promise<ResendVerifyEmailResult> => {
      /**
       * Prepare data.
       */

      const { email } = input;

      /**
       * Check if provided email exist and if it is verified.
       */

      const [user] = await User.query()
        .allowGraph('[metadata,token]')
        .withGraphJoined('[metadata,token]')
        .where('metadata.email', email)
        .andWhere('metadata.isVerified', false);

      /**
       * If email is verified return message.
       */

      if (user) {
        /**
         * Prepare data.
         */

        const {
          metadata: { email },
        } = user;

        let token = user.token.verifyEmailToken;
        let tokenExpires = user.token.verifyEmailTokenExpires;

        /**
         * Don't create new token if existing one is valid.
         */

        if (token === undefined || tokenExpires < new Date()) {
          /**
           * Generate token to verify email address.
           */

          token = generateRandomToken();
          tokenExpires = formatDate(Date.now() + verifyEmailTokenMaxAge);

          /**
           * Update user data.
           */

          try {
            await User.transaction(async (trx) => {
              return await user.$relatedQuery('token', trx).patch({
                verifyEmailToken: token,
                verifyEmailTokenExpires: tokenExpires,
              });
            });
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

        /**
         * Send verification email to provided email address.
         */

        mail.sendMail({
          from: config.EMAIL_USERNAME,
          to: email,
          subject: `Verify email address`,
          text: `Hello!
          \n Please use provided token below to verify your email address.
          \n Verification token: ${token}
          \n Token is valid until: ${tokenExpires}
          \n Have a nice day.`,
        });

        return {
          message:
            'Please check your provided email address for further instructions to activate your account',
        };
      }

      return {
        errors: [
          {
            __typename: 'Error',
            message: GENERIC_ERROR,
          },
        ],
      };
    },
  },
};

export default resolvers;
