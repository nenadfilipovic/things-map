import { Model } from 'objection';

export class UserMetadata extends Model {
  static tableName = 'userMetadata';
  static idColumn = 'userId';

  userId!: string;
  password!: string;
  email!: string;
  isVerified!: boolean;
  emailVerifiedDate!: Date;
  lastPasswordChangedDate!: Date;
  lastSignInDate!: Date;
  lastSignInIpAddress!: string;
  signInCount!: number;

  static jsonSchema = {
    type: 'object',
    required: ['email', 'password', 'userId'],

    properties: {
      userId: { type: 'string' },
      password: { type: 'string' },
      email: { type: 'string' },
      isVerified: { type: 'boolean' },
      emailVerifiedDate: { format: 'date-time' },
      lastPasswordChangedDate: { format: 'date-time' },
      lastSignInDate: { format: 'date-time' },
      lastSignInIpAddress: { type: 'string' },
      signInCount: { type: 'number' },
    },
  };
}
