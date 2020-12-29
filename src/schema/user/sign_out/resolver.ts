import { Resolvers } from 'src/types';
import { clearAuthenticationToken } from 'src/services/authentication';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Sign out user.
     */

    signOut: async (_, __, { ctx }) => {
      /**
       * Call clear function and return message.
       */

      clearAuthenticationToken(ctx);

      return {
        message: 'Successfully signed out',
      };
    },
  },
};

export default resolvers;
