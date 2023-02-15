const standard = require('./infra/node_modules/eslint-config-standard');

module.exports = [
  standard,
  {
    files: ['src/**/*.js'],
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
  },
];
