import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('device', (table) => {
    // Device's id.
    table.increments('id');

    // User's id.
    table
      .integer('user_id')
      .references('user.id')
      .onDelete('CASCADE')
      .notNullable();

    // Device's name.
    table.string('name').notNullable();

    // Device's description.
    table.string('description');

    // Device's url.
    table.string('url');

    // Device's latitude.
    table.decimal('latitude', 15, 10).notNullable();

    // Device's longitude.
    table.decimal('longitude', 15, 10).notNullable();

    // Device's elevation.
    table.integer('elevation');

    // Device's field.
    table.string('field1');

    // Device's field.
    table.string('field2');

    // Device's field.
    table.string('field3');

    // Device's field.
    table.string('field4');

    // Device's field.
    table.string('field5');

    // Device's public flag.
    table.boolean('is_public').defaultTo(false);

    // Device's modify date.
    table.dateTime('modify_date').defaultTo(knex.fn.now());

    // Device's created date.
    table.dateTime('created_date').defaultTo(knex.fn.now());

    // Index on latitude and longitude.
    table.index(['latitude', 'longitude']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('device');
}
