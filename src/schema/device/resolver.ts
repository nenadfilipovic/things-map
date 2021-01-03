import { raw } from 'objection';
import { Log } from 'src/database/models/Log';
import { User } from 'src/database/models/User';
import { Device } from 'src/database/models/Device';
import { LogConnection, Resolvers } from 'src/types';
import { DeviceMetadata } from 'src/database/models/DeviceMetadata';

const resolvers: Resolvers = {
  Query: {
    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Display public or user owned device.
     */

    device: async (parent, { id }, { ctx }): Promise<Device> => {
      /**
       * Prepare data.
       */

      const userId = ctx.state.user?.id;

      /**
       * Get device if user is owner of if device is public.
       */

      const [device] = await Device.query()
        .where('userId', userId)
        .andWhere('isPublic', true);

      return device;
    },

    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Get user owned devices or ones that are public.
     */

    devices: async (parent, { after, first }, { ctx }) => {
      const devices = after
        ? await Device.query()
            .where('isPublic', true)
            .andWhere(
              'createdDate',
              '<',
              new Date(Buffer.from(after, 'base64').toString()),
            )
            .limit(first + 1)
            .orderBy('createdDate', 'desc')
        : await Device.query()
            .where('isPublic', true)
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
          startCursor: Buffer.from(devices[0].createdDate).toString('base64'),
          endCursor: Buffer.from(
            nodes[nodes.length - 1].createdDate,
          ).toString(),
        },
      };
    },

    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Display devices by location.
     */

    devicesByLocation: async (
      parent,
      { latitude, longitude },
      { ctx },
    ): Promise<Device[]> => {
      const userId = ctx.state.user?.id;
      return await Device.query()
        .where(function () {
          this.where('isPublic', true).andWhere('userId', userId);
        })
        .andWhere('latitude', '<', latitude)
        .andWhere('longitude', '<', longitude);
    },

    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Get logs for device chart.
     */

    deviceChart: async (
      parent,
      { endDate, startDate, id },
      { ctx },
    ): Promise<Log[]> => {
      const userId = ctx.state.user?.id;
      const [device] = await Device.query()
        .where('userId', userId)
        .andWhere('id', id);
      return await Log.query()
        .where('deviceId', device.id)
        .where('time', '<', endDate)
        .andWhere('time', '>', startDate);
    },

    /**
     *
     * @param parent
     * @param args
     * @param context
     *
     * Get activity for device.
     */

    // search public devices or owned
    deviceActivity: async (parent, { id }, { ctx }) => {
      const userId = ctx.state.user?.id;
      const [device] = await Device.query()
        .where('id', id)
        .andWhere(function () {
          this.where('userId', userId).andWhere('isPublic', true);
        });
      const activity = await Log.query()
        .select(raw('date_trunc("day", time), COUNT (id)'))
        .where('deviceId', device.id);

      return activity;
    },
  },
  Device: {
    /**
     *
     * @param parent
     *
     * Resolves device metadata.
     */

    metadata: async ({ id }): Promise<DeviceMetadata> => {
      return await DeviceMetadata.query().findOne('deviceId', id);
    },

    /**
     *
     * @param parent
     *
     * Resolves device owner.
     */

    owner: async ({ userId }): Promise<User> => {
      return await User.query().findOne('id', userId);
    },

    /**
     *
     * @param parent
     *
     * Resolves device logs.
     */

    logs: async ({ id }, { first, after }): Promise<LogConnection> => {
      const logs = after
        ? await Log.query()
            .where('deviceId', id)
            .andWhere(
              'time',
              '<',
              new Date(Buffer.from(after, 'base64').toString()),
            )
            .limit(first + 1)
            .orderBy('time', 'desc')
        : await Log.query()
            .where('deviceId', id)
            .limit(first + 1)
            .orderBy('time', 'desc');

      const hasNextPage = logs.length > first;
      const nodes = hasNextPage ? logs.slice(0, -1) : logs;

      return {
        edges: nodes.map((log) => ({
          cursor: Buffer.from(log.time).toString('base64'),
          node: log,
        })),
        pageInfo: {
          hasNextPage,
          hasPreviousPage: false,
          startCursor: Buffer.from(nodes[0].time).toString('base64'),
          endCursor: Buffer.from(nodes[nodes.length - 1].time).toString(),
        },
      };
    },
  },
};

export default resolvers;
