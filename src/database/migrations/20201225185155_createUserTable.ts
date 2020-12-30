import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', (table) => {
    // User id.
    table.increments('id');

    // User first name.
    table.string('first_name').notNullable();

    // User last name.
    table.string('last_name').notNullable();

    // User bio.
    table.string('bio');

    // User website.
    table.string('website');

    // User username.
    table.string('username').unique().notNullable();

    // User public flag.
    table.boolean('is_public').defaultTo(false);

    // User latitude.
    table.decimal('latitude', 15, 10);

    // User longitude.
    table.decimal('longitude', 15, 10);

    // User country.
    table.string('country');

    // User last modify date.
    table.timestamp('modify_date').defaultTo(knex.fn.now());

    // User created date.
    table.timestamp('created_date').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user');
}
