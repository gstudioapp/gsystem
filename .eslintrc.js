module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/prop-types': 0,
    'jsx-a11y/aria-role': 1,
    '@typescript-eslint/ban-ts-ignore': 0,
  },
};
