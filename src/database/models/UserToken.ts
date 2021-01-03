import { Model } from 'objection';

export class UserToken extends Model {
  static tableName = 'userToken';
  static idColumn = 'userId';

  userId!: string;
  verifyEmailToken!: string;
  verifyEmailTokenTarget!: string;
  verifyEmailTokenExpires!: Date;
  updateEmailToken!: string;
  updateEmailTokenTarget!: string;
  updateEmailTokenExpires!: Date;
  resetPasswordToken!: string;
  resetPasswordTokenExpires!: Date;

  static jsonSchema = {
    type: 'object',
    required: ['userId'],

    properties: {
      userId: { type: 'string' },
      verifyEmailToken: { type: 'string' },
      verifyEmailTokenTarget: { type: 'string' },
      verifyEmailTokenExpires: { format: 'date-time' },
      updateEmailToken: { type: 'string' },
      updateEmailTokenTarget: { type: 'string' },
      updateEmailTokenExpires: { format: 'date-time' },
      resetPasswordToken: { type: 'string' },
      resetPasswordTokenExpires: { format: 'date-time' },
    },
  };
}
