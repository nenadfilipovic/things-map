import { Model, RelationMappings } from 'objection';

import { Country } from './Country';

class User extends Model {
  static get tableName(): string {
    return 'user';
  }

  static get relationMappings(): RelationMappings {
    return {
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: Country,
        join: {
          from: 'user.countryCode',
          to: 'country.code',
        },
      },
    };
  }
}

export { User };
