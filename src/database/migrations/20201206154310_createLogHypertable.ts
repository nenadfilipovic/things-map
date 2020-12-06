import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.raw("SELECT create_hypertable('log', 'time');");
}

export async function down(knex: Knex): Promise<void> {
  return;
}
