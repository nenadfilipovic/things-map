import { Model } from 'objection';

class Country extends Model {
  static get tableName(): string {
    return 'country';
  }

  static get idColumn(): string {
    return 'code';
  }
}

export { Country };
