import { Model } from 'objection';

export class Log extends Model {
  static tableName = 'log';
  static idColumn = 'time';

  time!: Date;
  deviceId!: string;
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
  field5?: string;
}
