import { Model } from 'objection';

export class UserToken extends Model {
  static tableName = 'userToken';
  static idColumn = 'userId';

  id!: number;
  userId!: number;
  verifyEmailToken!: string;
  verifyEmailTokenTarget!: string;
  verifyEmailTokenExpires!: Date;
  updateEmailToken!: string;
  updateEmailTokenTarget!: string;
  updateEmailTokenExpires!: Date;
  resetPasswordToken!: string;
  resetPasswordTokenExpires!: Date;
}
