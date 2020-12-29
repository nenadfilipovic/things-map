import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('watched_device', (table) => {
    // User's id.
    table
      .integer('user_id')
      .references('user.id')
      .onDelete('CASCADE')
      .notNullable();

    // Device's id.
    table
      .integer('device_id')
      .references('device.id')
      .onDelete('CASCADE')
      .notNullable();

    // Watched device created date.
    table.dateTime('created_date');

    // User can't watch same device more than one time.
    table.unique(['user_id', 'device_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('watched_device');
}
