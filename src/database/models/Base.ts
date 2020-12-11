import { Model } from 'objection';

class Base extends Model {
  createdDate!: string;
  modifiedDate!: string;

  $beforeInsert(): void {
    this.createdDate = new Date().toISOString();
  }

  $beforeUpdate(): void {
    this.modifiedDate = new Date().toISOString();
  }
}

export { Base };
