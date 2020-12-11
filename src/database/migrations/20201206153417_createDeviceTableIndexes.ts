import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('device', (table) => {
    table.index(['latitude', 'longitude']);
    table.index(['is_public', 'last_entry_id', 'modified_date']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('device', (table) => {
    table.dropIndex(['latitude', 'longitude']);
    table.dropIndex(['is_public', 'last_entry_id', 'modified_date']);
  });
}
