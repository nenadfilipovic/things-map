import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('devices', (table) => {
      table.increments('id');
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .notNullable();
      table.string('name').notNullable();
      table.string('description');
      table.string('url');
      table.decimal('latitude', 15, 10).notNullable();
      table.decimal('longitude', 15, 10).notNullable();
      table.string('elevation');
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
      table.string('write_key', 20).unique().notNullable();
      table.boolean('public_flag').defaultTo(false);
      table.integer('last_entry_id');
      table.dateTime('last_write_at');
      table.timestamps(true, true);
    })
    .then(() => {
      return knex.schema.alterTable('devices', (table) => {
        table.index(['latitude', 'longitude']);
        table.index(['public_flag', 'last_entry_id', 'updated_at']);
      });
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('devices');
}
