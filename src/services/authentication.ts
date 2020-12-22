import jwt from 'jsonwebtoken';
import { Context, Next, Middleware } from 'koa';
import { config, cookieConfig } from '../config';
import { PAYLOAD_COOKIE, SIGNATURE_COOKIE } from 'src/helpers/constants';

interface Payload {
  id: string;
  isAdmin: boolean;
  isVerified: boolean;
}

/**
 *
 * @param ctx
 * @param payload
 *
 * Build authentication token with key user props.
 */

const buildAuthenticationToken = (ctx: Context, payload: Payload): void => {
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
 * @param ctx
 * @param next
 *
 * Validate authentication token.
 */

const validateAuthenticationToken = async (
  ctx: Context,
  next: Next,
): Promise<Middleware> => {
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
 * @param ctx
 *
 * Clears authentication token.
 */

const clearAuthenticationToken = (ctx: Context): void => {
  ctx.cookies.set(PAYLOAD_COOKIE, '', {});
  ctx.cookies.set(SIGNATURE_COOKIE, '', {});
};

export {
  clearAuthenticationToken,
  validateAuthenticationToken,
  buildAuthenticationToken,
};
