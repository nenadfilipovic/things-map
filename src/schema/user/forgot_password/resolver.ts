import { mail } from 'src/services/mail';
import { formatDate } from 'src/services/date';
import { User } from 'src/database/models/User';
import { generateRandomToken } from 'src/services/generator';
import { config, resetPasswordTokenMaxAge } from 'src/config';
import { ForgotPasswordResult, Resolvers } from 'src/generated/resolverTypes';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param param1
     * @param context
     *
     * Initiate forgot password process.
     */

    forgotPassword: async (
      root,
      { input },
      context,
    ): Promise<ForgotPasswordResult> => {
      /**
       * Prepare data.
       */

      const { email } = input;
      const user = await User.query().findOne({ email, isVerified: true });

      /**
       * Send same response even if user doesn't exist.
       */

      if (user) {
        /**
         * Prepare data.
         */

        const {
          id,
          email,
          username,
          resetPasswordToken,
          resetPasswordTokenExpires,
        } = user;

        let token = resetPasswordToken;
        let tokenExpires = resetPasswordTokenExpires;

        /**
         * Don't create new token if existing one is valid.
         */

        if (token === null || tokenExpires < new Date()) {
          /**
           * Generate new token and set its life to 30 minutes.
           */

          token = generateRandomToken();
          tokenExpires = formatDate(Date.now() + resetPasswordTokenMaxAge);

          /**
           * Update user data.
           */

          await User.query()
            .patch({
              resetPasswordToken: token,
              resetPasswordTokenExpires: tokenExpires,
            })
            .findById(id);
        }

        /**
         * Send email with token.
         */

        mail.sendMail({
          from: config.EMAIL_USERNAME,
          to: email,
          subject: `Forgot password request from user: ${username}`,
          text: `Please use this token to reset your password. \n Token: ${token} \n Token is valid until: ${tokenExpires}`,
        });
      }

      return {
        message: `Thanks! If there's an account associated with this email, we'll send the password reset instructions immediately`,
      };
    },
  },
};

export default resolvers;
