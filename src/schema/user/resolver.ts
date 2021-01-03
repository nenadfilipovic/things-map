import {
  Maybe,
  Resolvers,
  UserMetadata as UserMetadataModel,
  WatchedDeviceConnection,
} from 'src/types';
import { User } from 'src/database/models/User';
import { Device } from 'src/database/models/Device';
import { UserMetadata } from 'src/database/models/UserMetadata';
import { WatchedDevice } from 'src/database/models/WatchedDevice';

const resolvers: Resolvers = {
  Query: {
    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Get logged in user data.
     */

    me: async (parent, args, { ctx }): Promise<Maybe<User>> => {
      /**
       * Prepare data.
       */

      let user;

      const id = ctx.state.user?.id;

      if (id) {
        user = await User.query().findById(id);
      }

      return user;
    },

    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Get public user by id.
     */

    user: async (parent, { id }, context): Promise<User> => {
      return await User.query().where('isPublic', true).findById(id);
    },

    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Get all public users.
     */

    users: async (parent, { first, after }, context) => {
      const users = after
        ? await User.query()
            .where('isPublic', true)
            .andWhere(
              'createdDate',
              '<',
              new Date(Buffer.from(after, 'base64').toString()),
            )
            .limit(first + 1)
            .orderBy('createdDate', 'desc')
        : await User.query()
            .where('isPublic', true)
            .limit(first + 1)
            .orderBy('createdDate', 'desc');

      const hasNextPage = users.length > first;
      const nodes = hasNextPage ? users.slice(0, -1) : users;

      return {
        edges: nodes.map((user) => ({
          cursor: Buffer.from(user.createdDate).toString('base64'),
          node: user,
        })),
        pageInfo: {
          hasNextPage,
          hasPreviousPage: false,
          startCursor: Buffer.from(nodes[0].createdDate).toString('base64'),
          endCursor: Buffer.from(nodes[nodes.length - 1].createdDate).toString(
            'base64',
          ),
        },
      };
    },
  },
  User: {
    /**
     *
     * @param parent
     *
     * Resolves user metadata.
     */

    metadata: async ({ id }): Promise<UserMetadataModel> => {
      /**
       * Extract needed data.
       */

      const {
        lastPasswordChangedDate,
        lastSignInDate,
        lastSignInIpAddress,
        signInCount,
      } = await UserMetadata.query().findOne('userId', id);

      /**
       * Return data.
       */

      return {
        lastPasswordChangedDate,
        lastSignInDate,
        lastSignInIpAddress,
        signInCount,
      };
    },

    /**
     *
     * @param parent
     *
     * Resolves user devices.
     */

    devices: async ({ id }, { first, after }) => {
      const devices = after
        ? await Device.query()
            .where('userId', id)
            .andWhere(
              'createdDate',
              '<',
              new Date(Buffer.from(after, 'base64').toString()),
            )
            .limit(first + 1)
            .orderBy('createdDate', 'desc')
        : await Device.query()
            .where('userId', id)
            .limit(first + 1)
            .orderBy('createdDate', 'desc');

      const hasNextPage = devices.length > first;
      const nodes = hasNextPage ? devices.slice(0, -1) : devices;

      return {
        edges: nodes.map((device) => ({
          cursor: Buffer.from(device.createdDate).toString('base64'),
          node: device,
        })),
        pageInfo: {
          hasNextPage,
          hasPreviousPage: false,
          startCursor: Buffer.from(nodes[0].createdDate).toString('base64'),
          endCursor: Buffer.from(nodes[nodes.length - 1].createdDate).toString(
            'base64',
          ),
        },
      };
    },

    /**
     *
     * @param parent
     *
     * Resolves user watched devices.
     */

    watchedDevices: async (
      { id },
      { after, first },
    ): Promise<WatchedDeviceConnection> => {
      const watchedDevices = after
        ? await WatchedDevice.query()
            .where('userId', id)
            .andWhere(
              'createdDate',
              '<',
              new Date(Buffer.from(after, 'base64').toString()),
            )
            .limit(first + 1)
            .orderBy('createdDate', 'desc')
        : await WatchedDevice.query()
            .where('userId', id)
            .limit(first + 1)
            .orderBy('createdDate', 'desc');

      const hasNextPage = watchedDevices.length > first;
      const nodes = hasNextPage ? watchedDevices.slice(0, -1) : watchedDevices;

      return {
        edges: watchedDevices.map((device) => ({
          cursor: Buffer.from(device.createdDate).toString('base64'),
          node: device,
        })),
        pageInfo: {
          hasNextPage,
          hasPreviousPage: false,
          startCursor: Buffer.from(nodes[0].createdDate).toString('base64'),
          endCursor: Buffer.from(
            nodes[nodes.length - 1].createdDate,
          ).toString(),
        },
      };
    },
  },
};

export default resolvers;
