import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('device', (table) => {
    // Device id.
    table.increments('id');

    // User id.
    table
      .integer('user_id')
      .references('user.id')
      .onDelete('CASCADE')
      .notNullable();

    // Device name.
    table.string('name').notNullable();

    // Device description.
    table.string('description');

    // Device url.
    table.string('url');

    // Device latitude.
    table.decimal('latitude', 15, 10).notNullable();

    // Device longitude.
    table.decimal('longitude', 15, 10).notNullable();

    // Device elevation.
    table.integer('elevation');

    // Device field.
    table.string('field1').notNullable();

    // Device field.
    table.string('field2');

    // Device field.
    table.string('field3');

    // Device field.
    table.string('field4');

    // Device field.
    table.string('field5');

    // Device public flag.
    table.boolean('is_public').defaultTo(false);

    // Device modify date.
    table.dateTime('modify_date').defaultTo(knex.fn.now());

    // Device created date.
    table.dateTime('created_date').defaultTo(knex.fn.now());

    // Index on latitude and longitude.
    table.index(['latitude', 'longitude']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('device');
}
