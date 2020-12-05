import type { Config } from '@jest/types';
import common from './jest.common';

const config: Config.InitialOptions = {
  // Load common config.
  ...common,

  // Custom name so we can differentiate between
  // tests in logs.
  displayName: {
    name: 'SERVER',
    color: 'white',
  },

  // We are working in node env so I need node here.
  testEnvironment: 'node',

  // Only match relevant tests.
  testMatch: ['<rootDir>/src/**/*.test.ts'],
};

export default config;
