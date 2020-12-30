import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_metadata', (table) => {
    // User id.
    table
      .integer('user_id')
      .references('user.id')
      .onDelete('CASCADE')
      .unique()
      .notNullable();

    // User password.
    table.string('password').notNullable();

    // User email.
    table.string('email').unique().notNullable();

    // User verified flag.
    table.boolean('is_verified').defaultTo(false);

    // User email verified date.
    table.timestamp('email_verified_date');

    // User last password changed date.
    table.timestamp('last_password_changed_date');

    // User last sign in.
    table.timestamp('last_sign_in_date');

    // User last sign in ip address.
    table.string('last_sign_in_ip_address');

    // User sign in count.
    table.integer('sign_in_count').defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_metadata');
}
