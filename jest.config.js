module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
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
    '<rootDir>/__test__/*.spec.test(js|jsx|ts|tsx)|**/)',
    '<rootDir>/client/src/**/*.test.(js|jsx|ts|tsx)|**/)',
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
