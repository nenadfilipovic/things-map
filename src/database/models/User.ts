import { Base } from './Base';
import { Country } from './Country';
import { Model, RelationMappings } from 'objection';

export class User extends Base {
  /**
   * General information.
   */

  id!: string;
  bio!: string;
  image!: string;
  email!: string;
  website!: string;
  lastName!: string;
  username!: string;
  password!: string;
  firstName!: string;
  countryCode!: string;

  /**
   * Flags.
   */

  isAdmin!: boolean;
  isPublic!: boolean;
  isBanned!: boolean;
  isVerified!: boolean;

  /**
   * Reset password.
   */

  resetPasswordToken!: string;
  lastPasswordChangedDate!: Date;
  resetPasswordTokenExpires!: Date;

  /**
   * Verify email.
   */

  emailVerifiedDate!: Date;
  verifyEmailToken!: string;
  verifyEmailTokenExpires!: Date;

  /**
   * Update email.
   */

  updateEmailToken!: string;
  updateEmailTokenExpires!: Date;

  /**
   * Sign in.
   */

  signInCount!: number;
  lastSignInDate!: Date;
  currentSignInIpAddress!: string;

  /**
   * Failed sign in.
   */

  failedSignIn!: number;
  firstFailedSignIn!: Date;

  /**
   * Delete account.
   */

  deleteAccountToken!: string;
  deleteAccountTokenExpires!: Date;

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
