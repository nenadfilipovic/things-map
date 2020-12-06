import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('failedLogin', (table) => {
    table.increments('id');
    table.string('username');
    table.string('email');
    table.string('password');
    table.string('ipAddress');
    table.string('userAgent');
    table.dateTime('createdDate').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('failedLogin');
}
