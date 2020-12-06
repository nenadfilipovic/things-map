import { Model } from 'objection';

class FailedLogin extends Model {
  static get tableName(): string {
    return 'failedLogin';
  }
}

export { FailedLogin };
