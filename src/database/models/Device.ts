import { Model } from 'objection';
import { DeviceMetadata } from './DeviceMetadata';

export class Device extends Model {
  static tableName = 'device';

  id!: number;
  userId!: number;
  name!: string;
  description!: string;
  url!: string;
  latitude!: number;
  longitude!: number;
  elevation!: number;
  field1!: string;
  field2!: string;
  field3!: string;
  field4!: string;
  field5!: string;
  isPublic!: boolean;
  modifyDate!: Date;
  createdDate!: Date;

  metadata!: DeviceMetadata;

  static relationMappings = {
    metadata: {
      relation: Model.HasOneRelation,
      modelClass: DeviceMetadata,
      join: {
        from: 'device.id',
        to: 'deviceMetadata.deviceId',
      },
    },
  };
}
