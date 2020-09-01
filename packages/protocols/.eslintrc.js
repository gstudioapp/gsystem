module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['prettier'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "tsconfig.app.json",
  },
  rules: {
    'prettier/prettier': ['error'],
  },
  ignorePatterns: [
    "backstop_data/**"
  ],
  overrides: []
};
