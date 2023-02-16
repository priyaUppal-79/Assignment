module.exports = {
    moduleFileExtensions: ['ts', 'js', 'module'],
    transformIgnorePatterns: ['/node_modules/'],
    testPathIgnorePatterns: [],
    testMatch: ['<rootDir>/**/*.spec.js'],
    "globals": {
      "appRoot":  __dirname + '/',
    },
    collectCoverage: true,
    collectCoverageFrom: [
      'App.js'
    ],
    coverageReporters: ['html', 'text', 'lcov', 'json'],
    coverageDirectory: 'unitTests/coverage',
    coverageThreshold: { // optional
      global: {
        branches: 30,
        functions: 40,
        lines: 40,
        statements: 40
      },
    }, // optional
  };