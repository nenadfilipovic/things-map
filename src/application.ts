import Koa from 'koa';
import zlib from 'zlib';
import cors from '@koa/cors';
import { config } from './config';
import compress from 'koa-compress';
import { validateAuthenticationToken } from 'src/services/authentication';

const application = new Koa();

application.keys = [config.COOKIE_KEY];

application
  .use(cors({ credentials: true }))
  .use(validateAuthenticationToken)
  .use(
    compress({
      filter(content_type) {
        return /text/i.test(content_type);
      },
      threshold: 2048,
      gzip: {
        flush: zlib.constants.Z_SYNC_FLUSH,
      },
      deflate: {
        flush: zlib.constants.Z_SYNC_FLUSH,
      },
      br: false,
    }),
  );

export { application };
