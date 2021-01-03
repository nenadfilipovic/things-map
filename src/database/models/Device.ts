import { Log } from './Log';
import { DeviceMetadata } from './DeviceMetadata';
import { Model, NonFunctionPropertyNames } from 'objection';

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
  createdDate!: Date;

  logs!: Log[];
  metadata?: DeviceMetadata;

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

  static jsonSchema = {
    type: 'object',
    required: ['name', 'longitude', 'latitude', 'field1'],

    properties: {
      id: { type: 'string' },
      userId: { type: 'string' },
      name: { type: 'string', minLength: 1, maxLength: 35 },
      description: { type: 'string' },
      url: { type: 'string' },
      latitude: { type: 'number' },
      longitude: { type: 'number' },
      elevation: { type: 'number' },
      field1: { type: 'string' },
      field2: { type: 'string' },
      field3: { type: 'string' },
      field4: { type: 'string' },
      field5: { type: 'string' },
      isPublic: { type: 'boolean' },
    },
  };
}

type CreateModelObject<T extends Model> = Pick<
  T,
  Exclude<NonFunctionPropertyNames<T>, 'QueryBuilderType'>
>;

export type DeviceModel = Omit<CreateModelObject<Device>, 'logs' | 'metadata'>;
