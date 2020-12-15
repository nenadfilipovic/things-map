import argon2 from 'argon2';

const hashPassword = async (password: string): Promise<string> => {
  return await argon2.hash(password, { type: argon2.argon2id });
};

const validatePassword = async (
  storedPassword: string,
  providedPassword: string,
): Promise<boolean> => {
  return await argon2.verify(storedPassword, providedPassword);
};

export { hashPassword, validatePassword };
