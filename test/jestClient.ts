import common from './jestCommon';
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Load common config.
  ...common,

  // Custom name so we can differentiate between
  // tests in logs.
  displayName: {
    name: 'CLIENT',
    color: 'yellow',
  },

  // We are working in browser env so I need jsdom here.
  testEnvironment: 'jsdom',

  // Only match relevant tests.
  testMatch: ['<rootDir>/client/**/*.test.ts?(x)'],
};

export default config;
