import Koa from 'koa';
import koaSession from 'koa-session';
import { config } from './config';

const application = new Koa();

application.keys = [config.COOKIE_KEY];

const sessionConfig = {
  key: 'things-map',
  maxAge: config.COOKIE_MAX_AGE * 60 * 60 * 1000,
  httpOnly: true,
  signed: true,
  secure: config.isDev,
};

application.use(koaSession(sessionConfig, application));

export { application };
