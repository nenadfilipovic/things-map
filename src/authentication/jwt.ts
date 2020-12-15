import jwt from 'jsonwebtoken';
import { Context, Next, Middleware } from 'koa';
import { config, cookieConfig } from '../config';
import { PAYLOAD_COOKIE, SIGNATURE_COOKIE } from 'src/helpers/constants';

interface Payload {
  id: string;
  isAdmin: boolean;
}

/**
 *
 * @param ctx Koa context.
 * @param payload Payload to store in token.
 *
 * Simplify creating tokens and storing them in cookies.
 * This way we implement two cookie authentication,
 * this way of handling authentication helps with frontend because
 * payload part of token will always be in non http-only cookie so javascript
 * can access it while signature will be secure under http-only cookie.
 */

const buildToken = (ctx: Context, payload: Payload): void => {
  const token = jwt.sign(payload, config.JWT_KEY, {
    expiresIn: `${config.JWT_COOKIE_MAX_AGE}m`,
  });

  const [tokenHeader, tokenPayload, tokenSignature] = token.split('.');

  ctx.cookies.set(PAYLOAD_COOKIE, `${tokenHeader}.${tokenPayload}`, {
    ...cookieConfig,
    httpOnly: false,
  });

  ctx.cookies.set(SIGNATURE_COOKIE, `${tokenSignature}`, cookieConfig);
};

/**
 *
 * @param ctx Koa context.
 * @param next Koa middleware next function.
 *
 * Gather cookies and check their existence,
 * merge their content into authentication token and validate
 * it, if token is valid store it on ctx.state.user key.
 */

const validateToken = async (ctx: Context, next: Next): Promise<Middleware> => {
  const tokenPayloadCookie = ctx.cookies.get(PAYLOAD_COOKIE);
  const tokenSignatureCookie = ctx.cookies.get(SIGNATURE_COOKIE);

  if (tokenPayloadCookie && tokenSignatureCookie) {
    const token = `${tokenPayloadCookie}.${tokenSignatureCookie}`;

    jwt.verify(token, config.JWT_KEY, function (error, decoded) {
      if (error) {
        return;
      }

      ctx.cookies.set(PAYLOAD_COOKIE, tokenPayloadCookie, {
        ...cookieConfig,
        httpOnly: false,
      });

      ctx.state['user'] = decoded;
    });
  }

  return next();
};

/**
 *
 * @param ctx Koa context.
 *
 * Cookies are invalidated by passing empty
 * string as their value.
 * Token parts inside cookies will continue to be
 * valid even after we destroy cookies but token
 * short life should protect us.
 */

const clearToken = (ctx: Context): void => {
  ctx.cookies.set(PAYLOAD_COOKIE, '', {});
  ctx.cookies.set(SIGNATURE_COOKIE, '', {});
};

export { buildToken, validateToken, clearToken };
