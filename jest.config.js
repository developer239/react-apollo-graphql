module.exports = {
  modulePaths: ['__mocks__', 'src'],
  testPathIgnorePatterns: ['/public', '/.dll-link-plugin', '/test'],
  modulePathIgnorePatterns: ['/public', '/.dll-link-plugin', '/test'],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
  verbose: true,
  collectCoverageFrom: ['src/**/*.js'],
}
