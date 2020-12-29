import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('device_metadata', (table) => {
    // Device's id.
    table
      .integer('device_id')
      .references('device.id')
      .onDelete('CASCADE')
      .unique()
      .notNullable();

    // Device's write key.
    table.string('write_key').unique().notNullable();

    // Device's last entry id.
    table.integer('last_entry_id');

    // Device's last write date.
    table.dateTime('last_write_date');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('device_metadata');
}
