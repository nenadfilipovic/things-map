import { Resolvers } from 'src/types';

const resolvers: Resolvers = {
  User: {
    metadata: async ({ metadata }, args) => {
      return metadata;
    },
  },
};

export default resolvers;
