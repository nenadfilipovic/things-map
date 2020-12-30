import { NOT_LOGGED_IN } from 'src/constants';
import { User } from 'src/database/models/User';
import { Resolvers, ViewUserResult } from 'src/types';

const resolvers: Resolvers = {
  Query: {
    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * View user.
     */
    viewUser: async (_, __, { ctx }): Promise<ViewUserResult> => {
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

      const user = await User.query().findById(id);

      return {
        user,
      };
    },
  },
};

export default resolvers;
