import { config } from 'src/config';
import { mail } from 'src/services/mail';
import { User } from 'src/database/models/User';
import { clearAuthenticationToken } from 'src/services/authentication';
import { hashPassword, validatePassword } from 'src/services/password';
import { Resolvers, UpdatePasswordResult } from 'src/generated/resolverTypes';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Updates users password.
     */

    updatePassword: async (
      _,
      { input },
      { ctx },
    ): Promise<UpdatePasswordResult> => {
      /**
       * Prepare data.
       */

      const { newPassword, currentPassword } = input;

      /**
       * Check context for logged in user.
       */

      const id = ctx.state.user?.id;

      if (!id) {
        return {
          message: 'User must be logged in to update password',
        };
      }

      const user = await User.query().findById(id);

      if (!user) {
        return {
          message: `Error something went wrong`,
        };
      }

      const { password, email } = user;

      /**
       * Validate provided password and update it with new one.
       */

      const validPassword = await validatePassword(password, currentPassword);

      if (!validPassword) {
        return {
          message: 'Invalid password',
        };
      }

      /**
       * Update user data.
       */

      await User.query()
        .patch({
          lastPasswordChangedDate: new Date(),
          password: await hashPassword(newPassword),
        })
        .findById(id);

      /**
       * Send email to user that password change was successful.
       */

      mail.sendMail({
        from: config.EMAIL_USERNAME,
        to: email,
        subject: `Change password confirmation`,
        text: `You have successfully updated your password.
        \n Please sign in.`,
      });

      /**
       * Deauthenticate user.
       */

      clearAuthenticationToken(ctx);

      return {
        message: `You have successfully updated your password`,
      };
    },
  },
};

export default resolvers;
