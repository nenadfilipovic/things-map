import { Log } from 'src/database/models/Log';
import { Device } from 'src/database/models/Device';
import { DeleteLogsResult, Resolvers } from 'src/types';
import { GENERIC_ERROR, NOT_LOGGED_IN } from 'src/constants';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Delete logs.
     */

    deleteLogs: async (
      parent,
      { input },
      { ctx },
    ): Promise<DeleteLogsResult> => {
      /**
       * Prepare data.
       */

      const userId = ctx.state.user?.id;
      const { id } = input;

      /**
       * Check if user is logged in.
       */

      if (userId) {
        /**
         * Check if device exist.
         */

        const [device] = await Device.query()
          .where('id', id)
          .andWhere('userId', userId);

        /**
         * Delete logs for device.
         */

        try {
          await Log.transaction(async (trx) => {
            return await Log.query(trx).where('deviceId', device.id).delete();
          });

          return {
            message: `Successfully deleted logs for device: ${device.name}`,
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
