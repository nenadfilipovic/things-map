import { Model, RelationMappings } from 'objection';
import { Base } from './Base';
import { Country } from './Country';

class User extends Base {
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
