import type { Config } from '@jest/types';
import path from 'path';

const config: Config.InitialOptions = {
  // Set root directory.
  rootDir: path.join(__dirname, '..'),

  // Custom name so we can differentiate between
  // tests in logs.
  displayName: {
    name: 'LINT',
    color: 'cyan',
  },

  // Use eslint runner to break tests if linting is not correct
  runner: 'jest-runner-eslint',

  // Only match relevant tests.
  testMatch: ['<rootDir>/**/*.ts'],
};

export default config;
