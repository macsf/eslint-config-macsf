module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  plugins: ['import', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },
  rules: {
    'array-bracket-spacing': 'error',
    'array-callback-return': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': ['warn'],
    camelcase: ['warn', { properties: 'never' }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    complexity: ['off', 11],
    curly: ['error', 'multi-line'],
    'default-case': 'warn',
    'dot-notation': 'warn',
    'eol-last': ['error', 'always'],
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    'generator-star-spacing': ['warn'],
    'global-require': 'error',
    'import/unambiguous': 'off',
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'max-depth': ['off', 4],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-alert': 'warn',
    'no-await-in-loop': 'warn',
    'no-confusing-arrow': ['warn', { allowParens: true }],
    'no-console': 'warn',
    'no-else-return': 'warn',
    'no-eq-null': 'warn',
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false
      }
    ],
    'no-extra-semi': 'warn',
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: []
      }
    ],
    'no-implied-eval': 'warn',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: false
      }
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'warn',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'ForOfStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'warn',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    'no-useless-return': 'warn',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'off',
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start'
      }
    ],
    'no-with': 'warn',
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],
    'one-var-declaration-per-line': ['error', 'always'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: false, allowUnboundThis: true }
    ],
    'prefer-const': [
      'error',
      { destructuring: 'any', ignoreReadBeforeAssign: true }
    ],
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'prefer-numeric-literals': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    quotes: ['warn', 'single', { avoidEscape: true }],
    'rest-spread-spacing': ['error', 'never'],
    strict: 'off',
    'template-curly-spacing': ['error', 'never'],
    'vars-on-top': 'warn',
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false
      }
    ],
    yoda: 'error',
    'react/sort-comp': 'error',
    'react/prefer-es6-class': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/jsx-boolean-value': ['warn', 'always'],
    'react/prefer-stateless-function': 'warn',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  }
};
