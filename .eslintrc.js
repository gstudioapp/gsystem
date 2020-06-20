module.exports = {
  extends: ['prettier', 'standard-with-typescript'],
  plugins: ['prettier', 'sort-imports-es6-autofix'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'prettier/prettier': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-floating-promises': 'off'
  }
}
