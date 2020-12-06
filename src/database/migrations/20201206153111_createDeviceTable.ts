import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('device', (table) => {
    table.increments('id');
    table
      .integer('userId')
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .notNullable();
    table.string('name').notNullable();
    table.string('description');
    table.string('url');
    table.decimal('latitude', 15, 10).notNullable();
    table.decimal('longitude', 15, 10).notNullable();
    table.integer('elevation');
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
    table.string('writeKey', 24).unique().notNullable();
    table.boolean('isPublic').defaultTo(false);
    table.integer('lastEntryId');
    table.dateTime('lastWriteAt');
    table.dateTime('createdDate').defaultTo(knex.fn.now());
    table.dateTime('modifiedDate').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('device');
}
