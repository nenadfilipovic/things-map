import { GENERIC_ERROR } from 'src/constants';
import { User } from 'src/database/models/User';
import { DeleteUserResult, Resolvers } from 'src/types';
import { validatePassword } from 'src/services/password';
import { clearAuthenticationToken } from 'src/services/authentication';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Delete user.
     */

    deleteUser: async (_, { input }, { ctx }): Promise<DeleteUserResult> => {
      /**
       * Prepare data.
       */

      const { password } = input;
      const id = ctx.state.user?.id;

      /**
       * Find user if logged in.
       */

      if (id) {
        const user = await User.query()
          .allowGraph('[metadata,token]')
          .withGraphJoined('[metadata,token]')
          .findById(id);

        if (user) {
          /**
           * Verify password.
           */

          const { metadata } = user;

          const validPassword = await validatePassword(
            metadata.password,
            password,
          );

          if (!validPassword) {
            return {
              errors: [
                {
                  __typename: 'Error',
                  message:
                    'Password you provided does not match stored password',
                },
              ],
            };
          }

          /**
           * Delete user.
           */

          try {
            await User.transaction(async (trx) => {
              return await user.$query(trx).delete();
            });

            /**
             * Call clear function and return message.
             */

            clearAuthenticationToken(ctx);

            return {
              message: 'User successfully deleted',
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
