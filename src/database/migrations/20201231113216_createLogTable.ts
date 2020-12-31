import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('log', (table) => {
      // Time key.
      table.timestamp('time').primary();

      // Device id.
      table
        .integer('device_id')
        .references('device.id')
        .onDelete('CASCADE')
        .notNullable();

      // Device field.
      table.string('field1');

      // Device field.
      table.string('field2');

      // Device field.
      table.string('field3');

      // Device field.
      table.string('field4');

      // Device field.
      table.string('field5');
    })
    .then(() => {
      // Convert table to hypertable.
      return knex.schema.raw("SELECT create_hypertable('log', 'time')");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('log');
}
