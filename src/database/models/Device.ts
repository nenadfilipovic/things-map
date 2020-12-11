import { Base } from './Base';

class Device extends Base {
  static get tableName(): string {
    return 'device';
  }
}

export { Device };
