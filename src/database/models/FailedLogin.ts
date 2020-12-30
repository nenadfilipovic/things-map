import { Model } from 'objection';

export class FailedLogin extends Model {
  static tableName = 'failedLogin';

  username!: string;
  email!: string;
  password!: string;
  ipAddress!: string;
  userAgent!: string;
  createdDate!: Date;
}
