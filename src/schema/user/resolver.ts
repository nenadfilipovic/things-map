import { Resolvers } from 'src/types';
import { UserMetadata } from 'src/database/models/UserMetadata';

const resolvers: Resolvers = {
  User: {
    metadata: async ({ metadata }, args): Promise<UserMetadata> => {
      return metadata;
    },
  },
};

export default resolvers;
