import { config } from 'src/config';
import { mail } from 'src/services/mail';
import { User } from 'src/database/models/User';
import { Resolvers, UpdatePasswordResult } from 'src/types';
import { GENERIC_ERROR, NOT_LOGGED_IN } from 'src/constants';
import { clearAuthenticationToken } from 'src/services/authentication';
import { hashPassword, validatePassword } from 'src/services/password';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Update password.
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

      if (newPassword === currentPassword) {
        return {
          errors: [
            {
              __typename: 'Error',
              message: 'Provided passwords must be different',
            },
          ],
        };
      }

      /**
       * Check if user is logged in.
       */

      const id = ctx.state.user?.id;

      if (!id) {
        return {
          errors: [
            {
              __typename: 'Error',
              message: NOT_LOGGED_IN,
            },
          ],
        };
      }

      const [user] = await User.query()
        .allowGraph('metadata')
        .withGraphJoined('metadata')
        .where('metadata.isVerified', true)
        .andWhere('id', id);

      /**
       * Prepare data.
       */

      if (user) {
        /**
         * Prepare data.
         */

        const { password, email } = user.metadata;

        /**
         * Validate provided password and update it with new one.
         */

        const validPassword = await validatePassword(password, currentPassword);

        if (!validPassword) {
          return {
            errors: [
              {
                __typename: 'Error',
                message: 'Password you provided does not match stored password',
              },
            ],
          };
        }

        /**
         * Update user data.
         */

        try {
          const transaction = await User.transaction(async (trx) => {
            return await user.$relatedQuery('metadata', trx).patch({
              lastPasswordChangedDate: new Date(),
              password: await hashPassword(newPassword),
            });
          });

          if (transaction) {
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
          }
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
            message: GENERIC_ERROR,
          },
        ],
      };
    },
  },
};

export default resolvers;
