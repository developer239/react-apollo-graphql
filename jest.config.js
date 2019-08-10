module.exports = {
  'modulePaths': ['__tests__', '__mocks__', 'src'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/assets',
    '/dist',
    '/node_modules',
    '/release-builds',
  ],
  modulePathIgnorePatterns: [
    '/assets',
    '/dist',
    '/node_modules',
    '/release-builds',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  verbose: true,
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
}
