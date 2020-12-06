import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('device', (table) => {
    table.index(['latitude', 'longitude']);
    table.index(['isPublic', 'lastEntryId', 'modifiedDate']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('device', (table) => {
    table.dropIndex(['latitude', 'longitude']);
    table.dropIndex(['isPublic', 'lastEntryId', 'modifiedDate']);
  });
}
