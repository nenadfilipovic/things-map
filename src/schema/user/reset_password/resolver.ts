import { raw } from 'objection';
import { mail } from 'src/services/mail';
import { formatDate } from 'src/services/date';
import { User } from 'src/database/models/User';
import { generateCode } from 'src/services/codegen';
import { clearToken } from 'src/authentication/jwt';
import { hashPassword } from 'src/authentication/password';
import { config, resetPasswordTokenMaxAge } from 'src/config';
import {
  ForgotPasswordResult,
  ResetPasswordResult,
  Resolvers,
} from 'src/generated/resolverTypes';

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

        if (token === null || tokenExpires < formatDate(Date.now())) {
          /**
           * Generate new token and set its life to 30 minutes.
           */

          token = generateCode(16);
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

    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Initiate reset password process.
     */

    resetPassword: async (
      root,
      { input },
      { ctx },
    ): Promise<ResetPasswordResult> => {
      /**
       * Prepare data.
       */

      const { resetPasswordToken } = input;
      const user = await User.query().findOne({ resetPasswordToken });

      /**
       * If token doesn't exist or is invalid return message.
       */

      if (user?.resetPasswordTokenExpires > formatDate(Date.now())) {
        /**
         * Prepare data.
         */

        const { id, email, username } = user;

        /**
         * Reset helper variables, create new password and update user data.
         */

        const password = generateCode(24);

        await User.query()
          .patch({
            password: await hashPassword(password),
            resetPasswordToken: raw('NULL'),
            resetPasswordTokenExpires: raw('NULL'),
            lastPasswordChangedDate: formatDate(Date.now()),
          })
          .findById(id);

        /**
         * Send new password to user.
         */

        mail.sendMail({
          from: config.EMAIL_USERNAME,
          to: email,
          subject: `New password for user: ${username}`,
          text: `You have successfully reseted your password. \n Here is your new password: ${password}`,
        });

        /**
         * Remove auth cookies.
         */

        clearToken(ctx);

        return {
          message: 'Please check your email address for your new password',
        };
      }

      return {
        message: 'Password reset token is invalid or expired',
      };
    },
  },
};

export default resolvers;
