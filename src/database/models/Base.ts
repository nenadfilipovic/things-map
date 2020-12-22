import { Model } from 'objection';

class Base extends Model {
  /**
   * Timestamps.
   */

  createdDate!: Date;
  modifiedDate!: Date;

  $beforeInsert(): void {
    this.createdDate = new Date();
  }

  $beforeUpdate(): void {
    this.modifiedDate = new Date();
  }
}

export { Base };
