/* @flow */
module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  plugins: ['import', 'prettier', 'babel'],
  extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    },
    'import/extensions': ['error', 'never'],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$'
    ],
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    },
    react: {
      pragma: 'React',
      version: '15.0'
    }
  },
  rules: {
    'array-callback-return': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
    'block-scoped-var': 'warn',
    camelcase: ['warn', { properties: 'never' }],
    'class-methods-use-this': [
      'off',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    ],
    complexity: ['off', 11],
    'computed-property-spacing': ['off', 'never'],
    'consistent-return': 'warn',
    curly: ['error', 'all'],
    'default-case': [
      'error',
      {
        commentPattern: '^no default$'
      }
    ],
    'dot-location': ['off', 'property'],
    'dot-notation': [
      'warn',
      {
        allowKeywords: true
      }
    ],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'func-call-spacing': ['off', 'never'],
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false
      }
    ],
    'func-style': ['off', 'expression'],
    'global-require': 'error',
    'guard-for-in': 'warn',
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-around-directive': [
      'off',
      {
        before: 'always',
        after: 'always'
      }
    ],
    'max-depth': ['off', 4],
    'max-len': [
      'error',
      80,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-params': ['off', 3],
    'max-statements': ['off', 10],
    'max-statements-per-line': [
      'off',
      {
        max: 1
      }
    ],
    'multiline-ternary': ['off', 'never'],
    'new-cap': [
      'off',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
      }
    ],
    'new-parens': 'off',
    'newline-per-chained-call': [
      'off',
      {
        ignoreChainWithDepth: 4
      }
    ],
    'no-alert': 'warn',
    'no-await-in-loop': 'warn',
    'no-bitwise': 'warn',
    'no-caller': 'warn',
    'no-confusing-arrow': ['warn'],
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-continue': 'warn',
    'no-else-return': 'warn',
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods']
      }
    ],
    // 'no-eq-null': 'warn',
    'no-eval': 'warn',
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false
      }
    ],
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
    'no-multi-assign': ['error'],
    'no-multi-str': 'warn',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'warn',
    'no-path-concat': 'error',
    'no-plusplus': 'warn',
    'no-proto': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-template-curly-in-string': 'warn',
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: false
      }
    ],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ],
    'no-use-before-define': 'error',
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
    'object-curly-spacing': ['off', 'always'],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],
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
    'prefer-rest-params': 'off',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: false,
        natural: true
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!']
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'],
          balanced: false
        }
      }
    ],
    strict: ['error', 'never'],
    'template-tag-spacing': ['off', 'never'],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true
      }
    ],
    'vars-on-top': 'warn',
    yoda: 'error',
    'import/default': 'off',
    'import/export': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never'
      }
    ],
    'import/first': ['warn', 'absolute-first'],
    'import/named': 'off',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'warn',
    'import/no-restricted-paths': 'off',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/order': [
      'off',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'never'
      }
    ],
    'import/prefer-default-export': 'error',
    'import/unambiguous': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'none',
        jsxBracketSameLine: true,
        semi: false
      }
    ],
    'babel/generator-star-spacing': 'off',
    'babel/new-cap': 'off',
    'babel/array-bracket-spacing': 'off',
    'babel/object-curly-spacing': 'off',
    'babel/object-shorthand': 'off',
    'babel/arrow-parens': 'off',
    'babel/no-await-in-loop': 'off'
  }
}
