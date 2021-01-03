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
     * Modifies device data.
     */

    modifyDevice: async (root, { input }, { ctx }) => {
      /**
       * Prepare data.
       */

      const userId = ctx.state.user?.id;
      const {
        id,
        description,
        elevation,
        field1,
        field2,
        field3,
        field4,
        field5,
        isPublic,
        latitude,
        longitude,
        name,
        url,
      } = input;

      /**
       * Check if user is logged in.
       */

      if (!userId) {
        return {
          errors: [{ __typename: 'Error', message: NOT_LOGGED_IN }],
        };
      }
      /**
       * Check if user exist.
       */

      const user = await User.query()
        .withGraphJoined('devices')
        .findById(userId);

      if (user) {
        /**
         * Update device.
         */

        try {
          const [transaction] = await User.transaction(async (trx) => {
            return await user
              .$relatedQuery('devices', trx)
              .patch({
                description,
                elevation,
                field1,
                field2,
                field3,
                field4,
                field5,
                isPublic,
                latitude,
                longitude,
                name,
                url,
                modifyDate: new Date(),
              })
              .where('id', id)
              .returning('*');
          });

          return {
            device: transaction,
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
