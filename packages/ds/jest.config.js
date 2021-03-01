module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      // TODO: enable diagnostics, so we can have 100% type checking on tests
      // for now, it generates a lot of typescript errors and here we're suppressing them
      diagnostics: false,
    },
  },
  collectCoverage: true,
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
};
