module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  syntax: 'scss',
  rules: {
    'no-eol-whitespace': null,
    'block-opening-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-no-empty': null,
    'declaration-empty-line-before': null,
    'declaration-block-semicolon-newline-after': null,
    'rule-empty-line-before': null,
    'comment-empty-line-before': null,
    'value-list-max-empty-lines': null,
    'declaration-colon-newline-after': null,
    'no-duplicate-selectors': null,
  },
}
