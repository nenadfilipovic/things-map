import { Resolvers, SignOutResult } from 'src/generated/resolverTypes';
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

    signOut: async (_, __, { ctx }): Promise<SignOutResult> => {
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
