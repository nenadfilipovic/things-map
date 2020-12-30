import { Device } from './Device';
import { UserToken } from './UserToken';
import { UserMetadata } from './UserMetadata';
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
  createdDate?: Date;

  token!: UserToken;
  devices!: Device[];
  metadata!: UserMetadata;

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
  };
}

type CreateModelObject<T extends Model> = Pick<
  T,
  Exclude<NonFunctionPropertyNames<T>, 'QueryBuilderType'>
>;

export type UserModel = Omit<
  CreateModelObject<User>,
  'token' | 'metadata' | 'devices'
>;
