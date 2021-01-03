import { User } from 'src/database/models/User';
import { Device } from 'src/database/models/Device';
import { GENERIC_ERROR, NOT_LOGGED_IN } from 'src/constants';
import { AddWatchedDeviceResult, Resolvers } from 'src/types';
import { WatchedDevice } from 'src/database/models/WatchedDevice';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Add watched device.
     */

    addWatchedDevice: async (
      parent,
      { input },
      { ctx },
    ): Promise<AddWatchedDeviceResult> => {
      /**
       * Prepare data.
       */

      const { deviceId } = input;
      const id = ctx.state.user?.id;

      /**
       * Check if user is logged in.
       */

      if (id) {
        /**
         * Check if user exist.
         */

        const user = await User.query().findById(id);

        /**
         * Check if device is public.
         */

        const device = await Device.query()
          .where('isPublic', true)
          .findById(deviceId);

        if (!device) {
          return {
            errors: [
              {
                __typename: 'Error',
                message: 'Device is not public',
              },
            ],
          };
        }

        try {
          await User.transaction(async (trx) => {
            return await WatchedDevice.query(trx).insert({
              userId: user.id,
              deviceId: device.id,
            });
          });

          return {
            message: `Successfully added watched device`,
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
