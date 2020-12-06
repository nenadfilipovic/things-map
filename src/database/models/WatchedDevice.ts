import { Model } from 'objection';

class WatchedDevice extends Model {
  static get tableName(): string {
    return 'watchedDevice';
  }
}

export { WatchedDevice };
