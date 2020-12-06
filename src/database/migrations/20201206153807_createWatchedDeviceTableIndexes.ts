import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('watchedDevice', (table) => {
    table.index(['userId', 'deviceId']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('watchedDevice', (table) => {
    table.dropIndex(['userId', 'deviceId']);
  });
}
