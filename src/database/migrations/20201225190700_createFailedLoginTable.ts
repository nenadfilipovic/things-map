import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('failed_login', (table) => {
    // Failed login entry id.
    table.increments('id');

    // User's username.
    table.string('username');

    // User's email.
    table.string('email');

    // User's password.
    table.string('password');

    // User's ip address.
    table.string('ip_address');

    // User's user agent.
    table.string('user_agent');

    // Failed login entry created date.
    table.timestamp('created_date').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('failed_login');
}
