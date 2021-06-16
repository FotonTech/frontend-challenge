module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    "no-console":0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/prop-types": 0,
    "react-hooks/exhaustive-deps": 0,
    "import/prefer-default-export": 0,
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-var-requires': 0,
  },
};