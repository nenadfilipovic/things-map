import { raw } from 'objection';
import { config } from 'src/config';
import { mail } from 'src/services/mail';
import { User } from 'src/database/models/User';
import { hashPassword } from 'src/services/password';
import { generateRandomToken } from 'src/services/generator';
import { clearAuthenticationToken } from 'src/services/authentication';
import { ResetPasswordResult, Resolvers } from 'src/generated/resolverTypes';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Initiate reset password process.
     */

    resetPassword: async (
      _,
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

      if (user?.resetPasswordTokenExpires > new Date()) {
        /**
         * Prepare data.
         */

        const { id, email, username } = user;

        /**
         * Reset helper variables, create new password and update user data.
         */

        const password = generateRandomToken(24);

        await User.query()
          .patch({
            resetPasswordToken: raw('NULL'),
            lastPasswordChangedDate: new Date(),
            resetPasswordTokenExpires: raw('NULL'),
            password: await hashPassword(password),
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
         * Deauthenticate user.
         */

        clearAuthenticationToken(ctx);

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
