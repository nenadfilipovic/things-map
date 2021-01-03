import { Resolvers } from 'src/types';
import { WatchedDevice } from 'src/database/models/WatchedDevice';

const resolvers: Resolvers = {
  Query: {
    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Display user watched devices.
     */

    watchedDevices: async (
      parent,
      args,
      { ctx },
    ): Promise<WatchedDevice[] | undefined> => {
      const id = ctx.state.user?.id;
      let watchedDevices;

      if (id) {
        watchedDevices = await WatchedDevice.query().where('userId', id);
      }

      return watchedDevices;
    },
  },
  WatchedDevice: {},
};

export default resolvers;
