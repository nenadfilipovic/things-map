import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('watched_device', (table) => {
    // Id.
    table.increments('id');

    // User id.
    table
      .uuid('user_id')
      .references('user.id')
      .onDelete('CASCADE')
      .notNullable();

    // Device id.
    table
      .uuid('device_id')
      .references('device.id')
      .onDelete('CASCADE')
      .notNullable();

    // Watched device created date.
    table.timestamp('created_date').defaultTo(knex.fn.now());

    // No duplication.
    table.unique(['user_id', 'device_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('watched_device');
}
