import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', (table) => {
    // User's id.
    table.increments('id');

    // User's first name.
    table.string('first_name').notNullable();

    // User's last name.
    table.string('last_name').notNullable();

    // User's bio.
    table.string('bio');

    // User's website.
    table.string('website');

    // User's username.
    table.string('username').unique().notNullable();

    // User's public flag.
    table.boolean('is_public').defaultTo(false);

    // User's latitude.
    table.decimal('latitude', 15, 10);

    // User's longitude.
    table.decimal('longitude', 15, 10);

    // User's country.
    table.string('country');

    // User's last modify date.
    table.timestamp('modify_date').defaultTo(knex.fn.now());

    // User's created date.
    table.timestamp('created_date').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user');
}
