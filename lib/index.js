module.exports = {
  'extends': 'eslint:recommended',
  'globals': {
    'console': true,
    'document': true,
    'window': true
  },
  'env': {
    'es6': true
  },
  'rules': {
    /* Variable rules */
    'semi': 2,

    /* Best Practices */
    'eqeqeq': 2,

    /* Possible Errors */
    'no-console': 1,

    /* Stylistic issues */
    'quotes': [2, 'single']
  }
};
