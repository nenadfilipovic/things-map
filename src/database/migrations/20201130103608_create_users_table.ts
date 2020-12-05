import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('username').notNullable().unique();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('bio');
    table.string('website');
    table.boolean('public_flag').defaultTo(false);
    table.boolean('banned_flag').defaultTo(false);
    table.boolean('admin_flag').defaultTo(false);
    table.boolean('verified_flag').defaultTo(false);
    table.string('country').references('id').inTable('countries').notNullable();
    table.string('image').defaultTo('default.png');
    table.string('time_zone').defaultTo('UTC');
    table.string('reset_password_token').unique();
    table.dateTime('reset_password_token_sent_at');
    table.string('last_sign_in_ip_address');
    table.string('current_sign_in_ip_address');
    table.integer('failed_password_attempts');
    table.dateTime('first_failed_password_attempt');
    table.integer('failed_reset_password_attempts');
    table.dateTime('first_failed_reset_password_attempt');
    table.string('delete_account_token').unique();
    table.dateTime('delete_account_token_generated');
    table.integer('sign_in_count').defaultTo(0);
    table.dateTime('last_sign_in_date');
    table.dateTime('current_sign_in_date');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
