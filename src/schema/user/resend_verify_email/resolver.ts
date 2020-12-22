import { mail } from 'src/services/mail';
import { formatDate } from 'src/services/date';
import { User } from 'src/database/models/User';
import { Resolvers } from 'src/generated/resolverTypes';
import { config, verifyEmailTokenMaxAge } from 'src/config';
import { generateRandomToken } from 'src/services/generator';

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

    resendVerifyEmail: async (_, { input }) => {
      /**
       * Prepare data.
       */

      const { email } = input;

      /**
       * Check if provided email exist and if it is verified.
       */

      const user = await User.query().findOne({ email });

      /**
       * If email is verified return message.
       */

      if (user) {
        /**
         * Prepare data.
         */

        const {
          id,
          email,
          isVerified,
          verifyEmailToken,
          verifyEmailTokenExpires,
        } = user;

        if (isVerified) {
          return {
            message: 'Email address already verified',
          };
        }

        let token = verifyEmailToken;
        let tokenExpires = verifyEmailTokenExpires;

        /**
         * Don't create new token if existing one is valid.
         */

        if (token === null || tokenExpires < new Date()) {
          /**
           * Generate token to verify email address.
           */

          token = generateRandomToken();
          tokenExpires = formatDate(Date.now() + verifyEmailTokenMaxAge);

          /**
           * Update user data.
           */

          await User.query()
            .patch({
              verifyEmailToken,
              verifyEmailTokenExpires,
            })
            .findById(id);
        }

        /**
         * Send verification email to provided email address.
         */

        mail.sendMail({
          from: config.EMAIL_USERNAME,
          to: email,
          subject: `Verify email address`,
          text: `Hello!
          \n Please use provided code below to verify your email address.
          \n Verification code: ${token}
          \n Token is valid until: ${tokenExpires}
          \n Have a nice day.`,
        });

        return {
          message:
            'Please check your provided email address for further instructions to activate your account',
        };
      }

      return {
        message: `Error something went wrong`,
      };
    },
  },
};

export default resolvers;
