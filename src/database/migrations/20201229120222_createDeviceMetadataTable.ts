import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('device_metadata', (table) => {
    // Device id.
    table
      .uuid('device_id')
      .references('device.id')
      .onDelete('CASCADE')
      .unique()
      .notNullable();

    // Device write key.
    table.string('write_key').unique().notNullable();

    // Device last entry id.
    table.integer('last_entry_id');

    // Device last write date.
    table.timestamp('last_write_date');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('device_metadata');
}
