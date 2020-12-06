import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('watchedDevice', (table) => {
    table
      .integer('userId')
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .notNullable();
    table
      .integer('deviceId')
      .references('id')
      .inTable('device')
      .onDelete('CASCADE')
      .notNullable();
    table.dateTime('createdDate').defaultTo(knex.fn.now());
    table.dateTime('modifiedDate').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('watchedDevice');
}
