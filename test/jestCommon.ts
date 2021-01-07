import path from 'path';
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Set root directory.
  rootDir: path.join(__dirname, '..'),

  // Select preset, I am using only ts files so
  // I need ts-jest.
  preset: 'ts-jest',
};

export default config;
