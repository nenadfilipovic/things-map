import { knexConfig } from './src/config';

export default {
  ...knexConfig,
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
