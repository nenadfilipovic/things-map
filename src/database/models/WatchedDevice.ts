import { Model } from 'objection';

export class WatchedDevice extends Model {
  static tableName = 'watchedDevice';
  static idColumn = 'userId';

  userId!: number;
  deviceId!: number;
  createdDate!: Date;
}
