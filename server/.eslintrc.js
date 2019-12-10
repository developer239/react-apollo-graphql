module.exports = {
  extends: [
    '@code-quality/eslint-config-node',
    '@code-quality/eslint-config-typescript',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'server',
        ],
      },
    },
  },
}
