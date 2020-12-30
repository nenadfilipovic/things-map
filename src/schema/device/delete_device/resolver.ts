import { User } from 'src/database/models/User';
import { DeleteDeviceResult, Resolvers } from 'src/types';
import { GENERIC_ERROR, NOT_LOGGED_IN } from 'src/constants';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Delete device.
     */

    deleteDevice: async (
      _,
      { input },
      { ctx },
    ): Promise<DeleteDeviceResult> => {
      /**
       * Prepare data.
       */

      const userId = ctx.state.user?.id;
      const { id } = input;

      /**
       * Find user if logged in.
       */

      if (userId) {
        /**
         * Find if user exist.
         */

        const user = await User.query()
          .withGraphJoined('devices')
          .findById(userId);

        if (user) {
          /**
           * Remove device.
           */

          try {
            await User.transaction(async (trx) => {
              return await user
                .$relatedQuery('devices', trx)
                .where('id', id)
                .delete();
            });

            return {
              message: 'Device successfully deleted',
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
            message: NOT_LOGGED_IN,
          },
        ],
      };
    },
  },
};

export default resolvers;
