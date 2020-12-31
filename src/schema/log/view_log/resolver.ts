import { GENERIC_ERROR } from 'src/constants';
import { Log } from 'src/database/models/Log';
import { Device } from 'src/database/models/Device';
import { Resolvers, ViewLogsResult } from 'src/types';

const resolvers: Resolvers = {
  Query: {
    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * View logs.
     */

    viewLogs: async (parent, { input }, { ctx }): Promise<ViewLogsResult> => {
      /**
       * Prepare data.
       */

      const userId = ctx.state.user?.id;
      const { id, end, start } = input;

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
         * Get logs for device.
         */

        const logs = await Log.query()
          .where('deviceId', device.id)
          .andWhere('time', '>', start)
          .andWhere('time', '<', end);

        return {
          logs,
        };
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
