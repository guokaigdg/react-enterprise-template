module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
    plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties', 'stylelint-scss'],
    rules: {
        'plugin/declaration-block-no-ignored-properties': true,
        'comment-empty-line-before': null,
        'declaration-empty-line-before': null,
        'function-name-case': 'lower',
        'no-descending-specificity': null,
        'no-invalid-double-slash-comments': null,
        'block-no-empty': null,
        'value-keyword-case': null,
        'rule-empty-line-before': ['always', {except: ['after-single-line-comment', 'first-nested']}],
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true
    },
    ignoreFiles: ['node_modules/**/*', 'build/**/*', 'dist/**/*', 'src/assets/font/*']
};
