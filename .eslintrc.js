module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'prettier',
    'unused-imports',
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-restricted-syntax': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'always'],

    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'if' },
    ],

    'implicit-arrow-linebreak': 'off',
    'no-plusplus': 'off',
    'max-classes-per-file': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'class-methods-use-this': 'off',
    'no-confusing-arrow': 'off',
    'function-paren-newline': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'consistent-return': 'off',
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'no-unused-expressions': 'off',

    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],

    // imports
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', args: 'all', argsIgnorePattern: '^_' },
    ],
  },
};
