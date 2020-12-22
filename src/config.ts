import envalid from 'envalid';
import { knexSnakeCaseMappers } from 'objection';

const { port, str, num } = envalid;

const config = envalid.cleanEnv(
  process.env,
  {
    DATABASE_CLIENT: str(),
    DATABASE_HOST: str(),
    DATABASE_NAME: str(),
    DATABASE_USER: str(),
    DATABASE_PASSWORD: str(),
    SERVER_PORT: port(),
    SERVER_ENDPOINT: str(),
    COOKIE_KEY: str(),
    JWT_COOKIE_MAX_AGE: num(),
    JWT_KEY: str(),
    EMAIL_HOST: str(),
    EMAIL_PORT: port(),
    EMAIL_USERNAME: str(),
    EMAIL_PASSWORD: str(),
    RESET_PASSWORD_TOKEN_MAX_AGE: num(),
    VERIFY_EMAIL_TOKEN_MAX_AGE: num(),
  },
  { strict: true, dotEnvPath: null },
);

const knexConfig = {
  client: config.DATABASE_CLIENT,
  connection: {
    host: config.DATABASE_HOST,
    database: config.DATABASE_NAME,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  debug: config.isDev,
  ...knexSnakeCaseMappers(),
};

const cookieConfig = {
  secure: config.isProd,
  httpOnly: true,
  signed: true,
  sameSite: true,
  maxAge: config.JWT_COOKIE_MAX_AGE * 1000 * 60,
};

const resetPasswordTokenMaxAge =
  config.RESET_PASSWORD_TOKEN_MAX_AGE * 1000 * 60;

const verifyEmailTokenMaxAge = config.VERIFY_EMAIL_TOKEN_MAX_AGE * 1000 * 60;

export {
  config,
  knexConfig,
  cookieConfig,
  resetPasswordTokenMaxAge,
  verifyEmailTokenMaxAge,
};
