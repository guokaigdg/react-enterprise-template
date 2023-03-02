module.exports = {
    extends: [
        'stylelint-config-standard', // stylelint配置标准, 如需修改请在rules添加配置
        'stylelint-config-rational-order', // 将相关属性声明进行排序, 按照(1.Positioning 2.Box Model 3.Typography 4.Visual 5.Animation 6.Misc)
        'stylelint-config-prettier' // 关闭所有不必要的或者可能与prettier相冲突的规则。(放到后面)
    ],

    plugins: [
        'stylelint-order', // 提示样式矛盾情况, 禁止由于同一规则中的另一个属性值而忽略的属性值。
        'stylelint-declaration-block-no-ignored-properties' // 提示样式矛盾情况, 禁止由于同一规则中的另一个属性值而忽略的属性值。
    ],
    // rules: 其中添加重写和添加内容。可以通过将规则的值设置为 null 来关闭规则
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
        'at-rule-no-unknown': null
    },
    // 忽略检测文件
    ignoreFiles: ['node_modules/**/*', 'build/**/*', 'dist/**/*', 'src/assets/font/*']
};
