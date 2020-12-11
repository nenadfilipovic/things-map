import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('failed_login', (table) => {
    table.increments('id');
    table.string('username');
    table.string('email');
    table.string('password');
    table.string('ip_address');
    table.string('user_agent');
    table.dateTime('created_date');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('failed_login');
}
