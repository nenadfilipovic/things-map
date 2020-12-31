import { Resolvers } from 'src/types';
import { Log } from 'src/database/models/Log';
import { User } from 'src/database/models/User';
import { DeviceMetadata } from 'src/database/models/DeviceMetadata';

const resolvers: Resolvers = {
  Device: {
    /**
     *
     * @param parent
     *
     * Resolves device metadata.
     */

    metadata: async ({ id }): Promise<DeviceMetadata> => {
      return await DeviceMetadata.query().findOne('deviceId', id);
    },

    /**
     *
     * @param parent
     *
     * Resolves device owner.
     */

    user: async ({ userId }): Promise<User> => {
      return await User.query().findOne('id', userId);
    },

    /**
     *
     * @param parent
     *
     * Resolves device logs.
     */

    logs: async ({ id }): Promise<Log[]> => {
      return await Log.query().where('deviceId', id);
    },
  },
};

export default resolvers;
