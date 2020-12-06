import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('country', (table) => {
    table.string('code').primary();
    table.string('longName');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('country');
}
