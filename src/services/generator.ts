import crypto from 'crypto';

/**
 *
 * @param size
 *
 * Generate random tokens.
 */
const generateRandomToken = (size = 16): string => {
  return crypto.randomBytes(size).toString('hex');
};

export { generateRandomToken };
