import { Model } from 'objection';

class Device extends Model {
  static get tableName(): string {
    return 'device';
  }
}

export { Device };
