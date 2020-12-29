import { Model } from 'objection';

export class DeviceMetadata extends Model {
  static tableName = 'deviceMetadata';
  static idColumn = 'deviceId';

  deviceId!: number;
  writeKey!: string;
  lastEntryId!: number;
  lastWriteDate!: Date;
}
