import config from './src/database/config';

export default {
  ...config,
  migrations: {
    tableName: 'knex_migrations',
    directory: 'src/database/migrations',
    extension: 'ts',
  },
  seeds: {
    directory: 'src/database/seeds',
    extension: 'ts',
  },
};
