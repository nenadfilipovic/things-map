import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Show results for every suite instead of just
  // writing end result.
  verbose: true,

  // From where to collect coverage.
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/src/**/*.test.{ts,tsx}',
    '!**/node_modules/**',
  ],

  // Warn if our code is not covered enough.
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },

  projects: [
    './test/jest.client.ts',
    './test/jest.server.ts',
    './test/jest.lint.ts',
  ],
};

export default config;
