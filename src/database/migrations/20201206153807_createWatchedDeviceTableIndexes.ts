import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('watched_device', (table) => {
    table.index(['user_id', 'device_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('watched_device', (table) => {
    table.dropIndex(['user_id', 'device_id']);
  });
}
