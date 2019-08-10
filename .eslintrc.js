module.exports = {
  'extends': [
    '@strv/eslint-config-react',
    '@strv/eslint-config-react/optional',
    '@strv/eslint-config-typescript',
    'prettier',
    'prettier/react'
  ],
  'plugins': [
    '@typescript-eslint',
    'react-hooks'
  ],
  'root': true,
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'react/no-did-mount-set-state': 'error',
    'import/no-default-export': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
}
