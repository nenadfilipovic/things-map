import { Resolvers } from 'src/types';
import { User } from 'src/database/models/User';
import { Device } from 'src/database/models/Device';
import { GENERIC_ERROR, NOT_LOGGED_IN } from 'src/constants';
import { generateRandomToken } from 'src/services/generator';

const resolvers: Resolvers = {
  Mutation: {
    /**
     *
     * @param root
     * @param args
     * @param context
     *
     * Create device.
     */

    newDevice: async (_, { input }, { ctx }) => {
      /**
       * Prepare data.
       */

      const id = ctx.state.user?.id;
      const {
        name,
        description,
        latitude,
        longitude,
        field1,
        field2,
        field3,
        field4,
        field5,
      } = input;

      if (id) {
        /**
         * Create device.
         */

        try {
          const transaction = await User.transaction(async (trx) => {
            return await Device.query(trx).insertGraphAndFetch({
              name,
              description,
              latitude,
              longitude,
              field1,
              field2,
              field3,
              field4,
              field5,
              userId: id,
              metadata: {
                writeKey: generateRandomToken(),
              },
            });
          });

          return {
            device: transaction,
            message: 'Device successfully created',
          };
        } catch {
          return {
            errors: [{ __typename: 'Error', message: GENERIC_ERROR }],
          };
        }
      }

      return {
        errors: [{ __typename: 'Error', message: NOT_LOGGED_IN }],
      };
    },
  },
};

export default resolvers;
