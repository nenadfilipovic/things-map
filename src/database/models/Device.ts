import { DeviceMetadata } from './DeviceMetadata';
import { Model, NonFunctionPropertyNames } from 'objection';
import { Log } from './Log';

export class Device extends Model {
  static tableName = 'device';

  id!: string;
  userId!: string;
  name?: string;
  description?: string;
  url?: string;
  latitude?: number;
  longitude?: number;
  elevation?: number;
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
  field5?: string;
  isPublic?: boolean;
  modifyDate?: Date;
  createdDate?: Date;

  metadata!: DeviceMetadata;
  logs!: Log[];

  static relationMappings = {
    metadata: {
      relation: Model.HasOneRelation,
      modelClass: DeviceMetadata,
      join: {
        from: 'device.id',
        to: 'deviceMetadata.deviceId',
      },
    },
    logs: {
      relation: Model.HasManyRelation,
      modelClass: Log,
      join: {
        from: 'device.id',
        to: 'log.deviceId',
      },
    },
  };
}

type CreateModelObject<T extends Model> = Pick<
  T,
  Exclude<NonFunctionPropertyNames<T>, 'QueryBuilderType'>
>;

export type DeviceModel = Omit<CreateModelObject<Device>, 'metadata' | 'logs'>;
