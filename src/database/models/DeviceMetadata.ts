import { Model } from 'objection';

export class DeviceMetadata extends Model {
  static tableName = 'deviceMetadata';
  static idColumn = 'deviceId';

  deviceId?: string;
  writeKey?: string;
  lastEntryId?: number;
  lastWriteDate?: Date;

  static jsonSchema = {
    type: 'object',
    required: ['deviceId', 'writeKey'],

    properties: {
      deviceId: { type: 'string' },
      writeKey: { type: 'string' },
      lastEntryId: { type: 'number' },
      lastWriteDate: { format: 'date-time' },
    },
  };
}
