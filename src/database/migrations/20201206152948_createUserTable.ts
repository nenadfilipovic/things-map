import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', (table) => {
    table.increments('id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('username').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('bio');
    table.string('website');
    table.boolean('is_public').defaultTo(false);
    table.boolean('is_banned').defaultTo(false);
    table.boolean('is_admin').defaultTo(false);
    table.boolean('is_verified').defaultTo(false);
    table
      .string('country_code')
      .references('code')
      .inTable('country')
      .notNullable();
    table.string('image').defaultTo('default.png');
    table.string('time_zone').defaultTo('UTC');
    table.string('reset_password_token').unique();
    table.dateTime('reset_password_token_generated_date');
    table.string('last_sign_in_ip_address');
    table.string('current_sign_in_ip_address');
    table.integer('failed_password_attempts');
    table.dateTime('first_failed_password_attempt');
    table.integer('failed_reset_password_attempts');
    table.dateTime('first_failed_reset_password_attempt');
    table.string('delete_account_token').unique();
    table.dateTime('delete_account_token_generated_date');
    table.integer('sign_in_count').defaultTo(0);
    table.dateTime('last_sign_in_date');
    table.dateTime('current_sign_in_date');
    table.dateTime('created_date');
    table.dateTime('modified_date');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user');
}
