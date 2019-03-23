module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true
    }
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true
  },
  rules: {
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'arrow-body-style': [1, 'as-needed'],
    'no-console': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  },
  plugins: ['html', 'prettier', 'react-hooks']
};
