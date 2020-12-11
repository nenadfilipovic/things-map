import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('watched_device', (table) => {
    table
      .integer('user_id')
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .notNullable();
    table
      .integer('device_id')
      .references('id')
      .inTable('device')
      .onDelete('CASCADE')
      .notNullable();
    table.dateTime('created_date');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('watched_device');
}
