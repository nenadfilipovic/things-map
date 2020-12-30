import { Model, NonFunctionPropertyNames } from 'objection';

export class UserMetadata extends Model {
  static tableName = 'userMetadata';
  static idColumn = 'userId';

  userId!: number;
  password!: string;
  email!: string;
  isVerified!: boolean;
  emailVerifiedDate!: Date;
  lastPasswordChangedDate!: Date;
  lastSignInDate!: Date;
  lastSignInIpAddress!: string;
  signInCount!: number;
}

type CreateModelObject<T extends Model> = Pick<
  T,
  Exclude<NonFunctionPropertyNames<T>, 'QueryBuilderType'>
>;

export type UserMetadataModel = CreateModelObject<UserMetadata>;
