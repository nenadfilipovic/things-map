import { Resolvers } from 'src/types';
import { DeviceMetadata } from 'src/database/models/DeviceMetadata';
import { User } from 'src/database/models/User';

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
  },
};

export default resolvers;
