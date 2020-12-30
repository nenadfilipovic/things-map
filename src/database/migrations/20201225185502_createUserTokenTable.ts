import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_token', (table) => {
    // User id.
    table
      .integer('user_id')
      .references('user.id')
      .onDelete('CASCADE')
      .unique()
      .notNullable();

    // Verify email token.
    table.string('verify_email_token').unique();

    // Which email is beign verified.
    table.string('verify_email_token_target').unique();

    // Verify email token expires.
    table.timestamp('verify_email_token_expires');

    // Update email token.
    table.string('update_email_token').unique();

    // To which email is user updating.
    table.string('update_email_token_target').unique();

    // Update email expires.
    table.timestamp('update_email_token_expires');

    // Reset password token.
    table.string('reset_password_token').unique();

    // Reset password expires.
    table.timestamp('reset_password_token_expires');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_token');
}
