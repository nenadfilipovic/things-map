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

      const { newPassword, oldPassword } = input;

      /**
       * Check context for logged in user.
       */

      const id = ctx.state.user?.id;

      if (!id) {
        return {
          message: 'Not logged in',
        };
      }

      const user = await User.query().findById(id);

      if (!user) {
        return {
          message: 'Something wrong happened',
        };
      }

      const { password, email, username } = user;

      /**
       * Validate provided password and update it with new one.
       */

      const validPassword = await validatePassword(password, oldPassword);

      if (!validPassword) {
        return {
          message: 'Bad password',
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
        subject: `Change password confirmation for user: ${username}`,
        text: `You have successfully updated your password`,
      });

      /**
       * Deauthenticate user.
       */

      clearAuthenticationToken(ctx);

      return {
        message: 'Successfully changed password',
      };
    },
  },
};

export default resolvers;
