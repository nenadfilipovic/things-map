import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('watched_devices', (table) => {
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .notNullable();
      table
        .integer('device_id')
        .references('id')
        .inTable('devices')
        .onDelete('CASCADE')
        .notNullable();
      table.timestamps(true, true);
    })
    .then(() => {
      return knex.schema.alterTable('watched_devices', (table) => {
        table.index(['user_id', 'device_id']);
      });
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('watched_devices');
}
