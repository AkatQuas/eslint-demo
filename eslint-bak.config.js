const a = require('eslint-config-standard');

module.exports = [
  a,
  {
    files: ['src/**/*.js'],
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
  },
];
