module.exports = {
  plugins: ['jest']
  extends: ['eslint:jest/recommended'],
  parserOptions: {
    ecmaVersion: 6, 
  },
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }], 
    'comma-dangle': ['error', 'always-multiline'],
  },
};