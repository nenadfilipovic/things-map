import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', (table) => {
    /**
     * General information.
     */

    table.string('bio');
    table.increments('id');
    table.string('website');
    table.string('password').notNullable();
    table.string('last_name').notNullable();
    table.string('first_name').notNullable();
    table.string('email').unique().notNullable();
    table.string('image').defaultTo('default.png');
    table.string('username').unique().notNullable();
    table
      .string('country_code')
      .references('code')
      .inTable('country')
      .notNullable();

    /**
     * Flags.
     */

    table.boolean('is_admin').defaultTo(false);
    table.boolean('is_public').defaultTo(false);
    table.boolean('is_banned').defaultTo(false);
    table.boolean('is_verified').defaultTo(false);

    /**
     * Reset password.
     */

    table.dateTime('last_password_changed_date');
    table.string('reset_password_token').unique();
    table.dateTime('reset_password_token_expires');

    /**
     * Verify email.
     */

    table.dateTime('email_verified_date');
    table.string('verify_email_token').unique();
    table.dateTime('verify_email_token_expires');

    /**
     * Update email.
     */

    table.string('update_email_token').unique();
    table.dateTime('update_email_token_expires');

    /**
     * Sign in.
     */

    table.dateTime('last_sign_in_date');
    table.string('current_sign_in_ip_address');
    table.integer('sign_in_count').defaultTo(0);

    /**
     * Failed sign in.
     */

    table.integer('failed_sign_in');
    table.dateTime('first_failed_sign_in');

    /**
     * Delete account.
     */

    table.string('delete_account_token').unique();
    table.dateTime('delete_account_token_expires');

    /**
     * Timestamps.
     */

    table.dateTime('created_date');
    table.dateTime('modified_date');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user');
}
