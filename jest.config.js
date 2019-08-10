module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePaths: ['src'],
  setupFilesAfterEnv: ['<rootDir>/src/test-utils/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  verbose: true,
  coverageReporters: ['json', 'lcov', 'text'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
  },
}
