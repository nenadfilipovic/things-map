import { Resolvers } from 'src/types';

const resolvers: Resolvers = {
  User: {
    metadata: async ({ metadata }) => {
      return metadata;
    },
  },
};

export default resolvers;
