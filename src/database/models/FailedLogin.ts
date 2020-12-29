import { Model } from 'objection';

export class FailedLogin extends Model {
  static tableName = 'failedLogin';

  id!: number;
  username!: string;
  email!: string;
  password!: string;
  ipAddress!: string;
  userAgent!: string;
  createdDate!: Date;
}
