import { NOT_LOGGED_IN } from 'src/constants';
import { Device } from 'src/database/models/Device';
import { Resolvers, ViewDeviceResult } from 'src/types';

const resolvers: Resolvers = {
  Query: {
    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * View device.
     */
    viewDevice: async (
      parent,
      { input },
      { ctx },
    ): Promise<ViewDeviceResult> => {
      /**
       * Prepare data.
       */

      const { id } = input;
      const userId = ctx.state.user?.id;

      if (!userId) {
        return {
          errors: [
            {
              __typename: 'Error',
              message: NOT_LOGGED_IN,
            },
          ],
        };
      }

      const device = await Device.query()
        .where('userId', userId)
        .findOne('id', id);

      return {
        device,
      };
    },
  },
};

export default resolvers;
