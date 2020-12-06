import { Model } from 'objection';

class Log extends Model {
  static get tableName(): string {
    return 'log';
  }

  static get idColumn(): string {
    return 'time';
  }
}

export { Log };
