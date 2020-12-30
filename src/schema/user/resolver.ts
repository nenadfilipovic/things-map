import { Resolvers } from 'src/types';
import { Device } from 'src/database/models/Device';
import { UserMetadata } from 'src/database/models/UserMetadata';

const resolvers: Resolvers = {
  User: {
    /**
     *
     * @param parent
     *
     * Resolves user metadata.
     */

    metadata: async ({ id }): Promise<UserMetadata> => {
      return await UserMetadata.query().findOne('userId', id);
    },

    /**
     *
     * @param parent
     *
     * Resolves user devices.
     */

    devices: async ({ id }): Promise<Device[]> => {
      return await Device.query().where('userId', id);
    },
  },
};

export default resolvers;
