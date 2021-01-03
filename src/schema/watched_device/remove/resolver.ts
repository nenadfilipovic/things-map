import { User } from 'src/database/models/User';
import { GENERIC_ERROR, NOT_LOGGED_IN } from 'src/constants';
import { RemoveWatchedDeviceResult, Resolvers } from 'src/types';
import { WatchedDevice } from 'src/database/models/WatchedDevice';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Remove watched device.
     */

    removeWatchedDevice: async (
      parent,
      { input },
      { ctx },
    ): Promise<RemoveWatchedDeviceResult> => {
      /**
       * Prepare data.
       */

      const { id } = input;
      const userId = ctx.state.user?.id;

      /**
       * Check if user is logged in.
       */

      if (userId) {
        /**
         * Delete watched device.
         */

        try {
          await User.transaction(async (trx) => {
            return await WatchedDevice.query(trx)
              .where('id', id)
              .andWhere('userId', userId)
              .delete();
          });

          return {
            message: `Successfully removed watched device`,
          };
        } catch {
          return {
            errors: [{ __typename: 'Error', message: GENERIC_ERROR }],
          };
        }
      }

      return {
        errors: [{ __typename: 'Error', message: NOT_LOGGED_IN }],
      };
    },
  },
};

export default resolvers;
