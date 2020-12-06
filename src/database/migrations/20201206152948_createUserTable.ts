import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', (table) => {
    table.increments('id');
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('username').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('bio');
    table.string('website');
    table.boolean('isPublic').defaultTo(false);
    table.boolean('isBanned').defaultTo(false);
    table.boolean('isAdmin').defaultTo(false);
    table.boolean('isVerified').defaultTo(false);
    table
      .string('countryCode')
      .references('code')
      .inTable('country')
      .notNullable();
    table.string('image').defaultTo('default.png');
    table.string('timeZone').defaultTo('UTC'); // Need fix
    table.string('resetPasswordToken').unique();
    table.dateTime('resetPasswordTokenGeneratedDate');
    table.string('lastSignInIpAddress');
    table.string('currentSignInIpAddress');
    table.integer('failedPasswordAttempts');
    table.dateTime('firstFailedPasswordAttempt');
    table.integer('failedResetPasswordAttempts');
    table.dateTime('firstFailedResetPasswordAttempt');
    table.string('deleteAccountToken').unique();
    table.dateTime('deleteAccountTokenGeneratedDate');
    table.integer('signInCount').defaultTo(0);
    table.dateTime('lastSignInDate');
    table.dateTime('currentSignInDate');
    table.dateTime('createdDate').defaultTo(knex.fn.now());
    table.dateTime('modifiedDate').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user');
}
