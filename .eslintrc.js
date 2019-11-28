module.exports = {
  'extends': [
    '@strv/eslint-config-react',
    '@strv/eslint-config-react/optional',
    '@strv/eslint-config-typescript',
    'prettier',
    'prettier/react',
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'paths': [
          'src',
        ],
      },
    },
  },
  'plugins': [
    '@typescript-eslint',
    'react-hooks',
  ],
  'root': true,
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': true,
  },
  'parser': '@typescript-eslint/parser',
  'rules': {
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/no-did-mount-set-state': 'error',
    'import/no-default-export': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 0,
  },
  'parserOptions': {
    // The project field is required in order for some TS-syntax-specific rules to function at all
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    'project': './tsconfig.json',
  },
}
