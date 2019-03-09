module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime.js'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>/__test__/**/*.test.(js|jsx|ts|tsx)|**/)',
    '<rootDir>/client/src/**/*.test.(js|jsx|ts|tsx)|**/)',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
