import { Resolvers } from 'src/types';
import { NOT_LOGGED_IN } from 'src/constants';
import { User } from 'src/database/models/User';

const resolvers: Resolvers = {
  Query: {
    viewUser: async (parent, args, { ctx }) => {
      /**
       * Prepare data.
       */

      const id = ctx.state.user?.id;

      if (!id) {
        return {
          errors: [
            {
              __typename: 'Error',
              message: NOT_LOGGED_IN,
            },
          ],
        };
      }

      return {
        user: await User.query().withGraphJoined('metadata').findById(id),
      };
    },
  },
};

export default resolvers;
