import { Model, NonFunctionPropertyNames } from 'objection';

export class DeviceMetadata extends Model {
  static tableName = 'deviceMetadata';
  static idColumn = 'deviceId';

  deviceId!: number;
  writeKey!: string;
  lastEntryId!: number;
  lastWriteDate!: Date;
}

type CreateModelObject<T extends Model> = Pick<
  T,
  Exclude<NonFunctionPropertyNames<T>, 'QueryBuilderType'>
>;

export type DeviceMetadataModel = CreateModelObject<DeviceMetadata>;
