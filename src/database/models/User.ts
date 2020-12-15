import { Model, RelationMappings } from 'objection';
import { Base } from './Base';
import { Country } from './Country';

export class User extends Base {
  id!: string;
  firstName!: string;
  lastName!: string;
  username!: string;
  email!: string;
  password!: string;
  bio!: string;
  website!: string;
  isPublic!: boolean;
  isBanned!: boolean;
  isAdmin!: boolean;
  isVerified!: boolean;
  countryCode!: string;
  image!: string;
  timeZone!: string;
  resetPasswordToken!: string;
  resetPasswordTokenGeneratedDate!: Date;
  lastSignInIpAddress!: string;
  currentSignInIpAddress!: string;
  failedPasswordAttempts!: number;
  firstFailedPasswordAttemp!: Date;
  failedResetPasswordAttempts!: number;
  firstFailedResetPasswordAttempt!: Date;
  deleteAccountToken!: string;
  deleteAccountTokenGeneratedDate!: Date;
  signInCount!: number;
  lastSignInDate!: Date;
  surrentSignInDate!: Date;

  static get tableName(): string {
    return 'user';
  }

  static get relationMappings(): RelationMappings {
    return {
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: Country,
        join: {
          from: 'user.countryCode',
          to: 'country.code',
        },
      },
    };
  }
}
