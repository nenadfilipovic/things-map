import Koa from 'koa';
import cors from '@koa/cors';
import { config } from './config';
import { validateToken } from 'src/authentication/jwt';

const application = new Koa();

application.keys = [config.COOKIE_KEY];

application.use(cors({ credentials: true })).use(validateToken);

export { application };
