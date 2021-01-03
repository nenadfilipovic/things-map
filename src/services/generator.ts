import { v4 as uuidv4 } from 'uuid';

/**
 *
 * @param size
 *
 * Generate random tokens.
 */
const generateRandomToken = (): string => {
  return uuidv4();
};

export { generateRandomToken };
