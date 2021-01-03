import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('log', (table) => {
      // Id.
      table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).notNullable();

      // Time key.
      table.timestamp('time');

      // Device id.
      table
        .uuid('device_id')
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
