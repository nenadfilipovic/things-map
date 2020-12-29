import { Model } from 'objection';

export class UserMetadata extends Model {
  static tableName = 'userMetadata';
  static idColumn = 'userId';

  password!: string;
  email!: string;
  isVerified!: boolean;
  emailVerifiedDate!: Date;
  lastPasswordChangedDate!: Date;
  lastSignInDate!: Date;
  lastSignInIpAddress!: string;
  signInCount!: number;
}
