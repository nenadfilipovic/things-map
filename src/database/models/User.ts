import { Model } from 'objection';
import { UserToken } from './UserToken';
import { UserMetadata } from './UserMetadata';

export class User extends Model {
  static tableName = 'user';

  id!: string;
  firstName!: string;
  lastName!: string;
  bio!: string;
  website!: string;
  username!: string;
  isPublic!: boolean;
  latitude!: number;
  longitude!: number;
  country!: string;
  modifyDate!: Date;
  createdDate!: Date;

  tokens!: UserToken;
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
    tokens: {
      relation: Model.HasOneRelation,
      modelClass: UserToken,
      join: {
        from: 'user.id',
        to: 'userToken.userId',
      },
    },
  };
}
