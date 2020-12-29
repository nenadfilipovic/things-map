import { Resolvers } from 'src/types';

const resolvers: Resolvers = {
  Device: {
    metadata: async ({ metadata }) => {
      return metadata;
    },
  },
};

export default resolvers;
