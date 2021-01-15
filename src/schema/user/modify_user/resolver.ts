import { Resolvers } from 'src/types';
import { User } from 'src/database/models/User';
import { GENERIC_ERROR, NOT_LOGGED_IN } from 'src/constants';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Modifies user data.
     */

    modifyUser: async (root, { input }, { ctx }) => {
      /**
       * Prepare data.
       */

      const {
        bio,
        country,
        firstName,
        lastName,
        username,
        website,
        latitude,
        longitude,
        isPublic,
      } = input;

      /**
       * Check if user is logged in.
       */

      const id = ctx.state.user?.id;

      if (!id) {
        return {
          errors: [{ __typename: 'Error', message: NOT_LOGGED_IN }],
        };
      }

      /**
       * Check if user exist.
       */

      const user = await User.query().findById(id);

      if (user) {
        /**
         * Update user data.
         */

        try {
          await User.transaction(async (trx) => {
            return await user.$query(trx).patchAndFetch({
              bio,
              firstName,
              lastName,
              username,
              website,
              latitude,
              longitude,
              isPublic,
              country,
              modifyDate: new Date(),
            });
          });

          return {
            user,
            message: 'Successfully updated',
          };
        } catch {
          return {
            errors: [{ __typename: 'Error', message: GENERIC_ERROR }],
          };
        }
      }

      return {
        errors: [{ __typename: 'Error', message: GENERIC_ERROR }],
      };
    },
  },
};

export default resolvers;
