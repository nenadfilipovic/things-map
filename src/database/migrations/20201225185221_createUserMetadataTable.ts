import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_metadata', (table) => {
    // User's id.
    table
      .integer('user_id')
      .references('user.id')
      .onDelete('CASCADE')
      .unique()
      .notNullable();

    // User's password.
    table.string('password').notNullable();

    // User's email.
    table.string('email').unique().notNullable();

    // User's verified flag.
    table.boolean('is_verified').defaultTo(false);

    // User's email verified date.
    table.timestamp('email_verified_date');

    // User's last password changed date.
    table.timestamp('last_password_changed_date');

    // User's last sign in.
    table.timestamp('last_sign_in_date');

    // User's last sign in ip address.
    table.string('last_sign_in_ip_address');

    // User's sign in count.
    table.integer('sign_in_count').defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_metadata');
}
