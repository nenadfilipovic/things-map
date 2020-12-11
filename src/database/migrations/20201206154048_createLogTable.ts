import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('log', (table) => {
    table.dateTime('time').primary();
    table.integer('device_id').references('id').inTable('device');
    table.string('field1');
    table.string('field2');
    table.string('field3');
    table.string('field4');
    table.string('field5');
    table.string('field6');
    table.string('field7');
    table.string('field8');
    table.string('field9');
    table.string('field10');
    table.decimal('latitude', 15, 10);
    table.decimal('longitude', 15, 10);
    table.integer('elevation');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('log');
}
