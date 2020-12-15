import { clearToken } from 'src/authentication/jwt';
import { Resolvers, SignOutUserResult } from 'src/generated/resolverTypes';

const resolvers: Resolvers = {
  Mutation: {
    signOutUser: async (
      root,
      args,
      { ctx },
      info,
    ): Promise<SignOutUserResult> => {
      clearToken(ctx);

      return {
        __typename: 'SignOutUserResult',
        message: 'Successfully logged out.',
      };
    },
  },
};

export default resolvers;
