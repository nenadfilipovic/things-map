import { Device } from './Device';
import { UserToken } from './UserToken';
import { UserMetadata } from './UserMetadata';
import { WatchedDevice } from './WatchedDevice';
import { Model, NonFunctionPropertyNames } from 'objection';

export class User extends Model {
  static tableName = 'user';

  id!: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  website?: string;
  username?: string;
  isPublic?: boolean;
  latitude?: number;
  longitude?: number;
  country?: string;
  modifyDate?: Date;
  createdDate!: Date;

  token!: UserToken;
  devices!: Device[];
  metadata!: UserMetadata;
  watchedDevices!: WatchedDevice[];

  static relationMappings = {
    metadata: {
      relation: Model.HasOneRelation,
      modelClass: UserMetadata,
      join: {
        from: 'user.id',
        to: 'userMetadata.userId',
      },
    },
    token: {
      relation: Model.HasOneRelation,
      modelClass: UserToken,
      join: {
        from: 'user.id',
        to: 'userToken.userId',
      },
    },
    devices: {
      relation: Model.HasManyRelation,
      modelClass: Device,
      join: {
        from: 'user.id',
        to: 'device.userId',
      },
    },
    watchedDevices: {
      relation: Model.ManyToManyRelation,
      modelClass: Device,
      join: {
        from: 'device.id',
        through: {
          from: 'watchedDevice.deviceId',
          to: 'watchedDevice.userId',
        },
        to: 'user.id',
      },
    },
  };

  static jsonSchema = {
    type: 'object',
    required: ['firstName', 'lastName', 'username'],

    properties: {
      id: { type: 'string' },
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      bio: { type: 'string' },
      website: { type: 'string' },
      username: { type: 'string' },
      isPublic: { type: 'boolean' },
      latitude: { type: 'number' },
      longitude: { type: 'number' },
      country: { type: 'string' },
      modifyDate: { format: 'date-time' },
      createdDate: { format: 'date-time' },
    },
  };
}

type CreateModelObject<T extends Model> = Pick<
  T,
  Exclude<NonFunctionPropertyNames<T>, 'QueryBuilderType'>
>;

export type UserModel = Omit<
  CreateModelObject<User>,
  'token' | 'metadata' | 'devices' | 'watchedDevices'
>;
