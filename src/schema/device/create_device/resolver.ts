import { User } from 'src/database/models/User';
import { CreateDeviceResult, Resolvers } from 'src/types';
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

    createDevice: async (
      _,
      { input },
      { ctx },
    ): Promise<CreateDeviceResult> => {
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
         * Get user.
         */

        const user = await User.query().withGraphJoined('devices').findById(id);

        if (user) {
          /**
           * Create device.
           */

          const writeKey = generateRandomToken();

          try {
            const transaction = await User.transaction(async (trx) => {
              return await user
                .$relatedQuery('devices', trx)
                .insertGraphAndFetch({
                  name,
                  description,
                  latitude,
                  longitude,
                  field1,
                  field2,
                  field3,
                  field4,
                  field5,
                  metadata: {
                    writeKey,
                  },
                });
            });

            return {
              device: transaction,
              message: 'Device successfully created',
            };
          } catch {
            return {
              errors: [
                {
                  __typename: 'Error',
                  message: GENERIC_ERROR,
                },
              ],
            };
          }
        }

        return {
          errors: [
            {
              __typename: 'Error',
              message: GENERIC_ERROR,
            },
          ],
        };
      }

      return {
        errors: [
          {
            __typename: 'Error',
            message: NOT_LOGGED_IN,
          },
        ],
      };
    },
  },
};

export default resolvers;
