import { Model } from 'objection';

export class WatchedDevice extends Model {
  static tableName = 'watchedDevice';

  id!: string;
  userId!: string;
  deviceId!: string;
  createdDate!: Date;

  static jsonSchema = {
    type: 'object',
    required: ['userId', 'deviceId'],

    properties: {
      id: { type: 'string' },
      userId: { type: 'string' },
      deviceId: { type: 'string' },
      createdDate: { format: 'date-time' },
    },
  };
}
