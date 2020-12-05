import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('failed_logins', (table) => {
    table.string('username');
    table.string('email');
    table.string('password');
    table.string('ip_address');
    table.string('user_agent');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('failed_logins');
}
