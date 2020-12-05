import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('logs', (table) => {
      // Timezone friendly (uses timestamptz).
      table.timestamp('time').primary();
      table.integer('device_id').references('id').inTable('devices');
      table.string('field_1');
      table.string('field_2');
      table.string('field_3');
      table.string('field_4');
      table.string('field_5');
      table.string('field_6');
      table.string('field_7');
      table.string('field_8');
      table.string('field_9');
      table.string('field_10');
      table.decimal('latitude', 15, 10);
      table.decimal('longitude', 15, 10);
      table.string('elevation');
    })
    .then(() => {
      return knex.schema.raw("SELECT create_hypertable('logs', 'time');");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('logs');
}
