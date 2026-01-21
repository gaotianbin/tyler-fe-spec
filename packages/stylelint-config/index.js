/*
 * @Author: t-tianbin.gao t-tianbin.gao@pcitc.com
 * @Date: 2026-01-20 16:59:05
 * @LastEditors: t-tianbin.gao t-tianbin.gao@pcitc.com
 * @LastEditTime: 2026-01-20 17:47:53
 * @FilePath: /tyler-fe-spec/packages/stylelint-config/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  defaultSeverity: 'warning',
  plugins: ['stylelint-scss'],
  rules: {
    /**
     * Possible errors
     * @link https://stylelint.io/user-guide/rules/#possible-errors
     */
    // 这个规则用于检测未知的 CSS at-rule（如 @import, @media 等）。将其设置为 null 表示禁用此检查。
    'at-rule-no-unknown': null,
    // 这个规则用于检测未知的 SCSS at-rule。将其设置为 true 表示启用此检查。
    'scss/at-rule-no-unknown': true,
    // 这个规则用于检测空的 CSS 块（即没有内容的规则集）。将其设置为 null 表示禁用此检查。
    'block-no-empty': null,
    // 这个规则用于检测无效的十六进制颜色值。将其设置为 true 表示启用此检查。
    'color-no-invalid-hex': true,
    // 这个规则用于检测空的注释。将其设置为 true 表示启用此检查。
    'comment-no-empty': true,
    // 这个规则用于检测声明块中重复的属性。将其设置为 true 表示启用此检查，但忽略连续的重复属性且具有不同值的情况。
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    // 这个规则用于检测在声明块中使用简写属性（如 margin, padding）时，是否覆盖了简写属性中的某个子属性（如 margin-top）。如果简写属性覆盖了子属性，Stylelint 会发出警告或错误。
    'declaration-block-no-shorthand-property-overrides': true,
    // 这个规则用于检测 font-family 声明中是否有重复的名字。如果有重复的名字，Stylelint 会发出警告或错误。
    'font-family-no-duplicate-names': true,
    // 这个规则用于检测在 calc() 函数中运算符（如 +, -, *, /）的两边是否有空格。如果没有空格，Stylelint 会发出警告或错误。
    'function-calc-no-unspaced-operator': true,
    // 这个规则用于检测 linear-gradient() 函数中是否使用了非标准的方向值。如果使用了非标准的方向值，Stylelint 会发出警告或错误。
    'function-linear-gradient-no-nonstandard-direction': true,
    // 个规则用于检测在关键帧（keyframes）声明中是否有使用 !important。如果使用了 !important，Stylelint 会发出警告或错误。
    'keyframe-declaration-no-important': true,
    // 这个规则用于检测媒体查询（media queries）中是否有使用未知的媒体特性（media feature）。如果使用了未知的媒体特性，Stylelint 会发出警告或错误。
    'media-feature-name-no-unknown': true,
    // 这个规则用于检测选择器的优先级是否在规则块中递减。如果选择器的优先级递减，Stylelint 会发出警告或错误。这里设置为 null 表示禁用此检查。
    'no-descending-specificity': null, // @reason 实际有很多这样用的，且多数人熟悉 css 优先级
    // 这个规则用于检测是否有重复的 @import 规则。如果有重复的 @import 规则，Stylelint 会发出警告或错误。
    'no-duplicate-at-import-rules': true,
    // 这个规则用于检测是否有重复的选择器。如果有重复的选择器，Stylelint 会发出警告或错误。
    'no-duplicate-selectors': true,
    // 这个规则用于检测源文件是否为空。如果源文件为空，Stylelint 会发出警告或错误。这里设置为 null 表示禁用此检查。
    'no-empty-source': null,
    // 这个规则用于检测是否有不必要的分号。如果有不必要的分号，Stylelint 会发出警告或错误。
    'no-extra-semicolons': true,
    // 这个规则用于检测是否使用了无效的双斜杠（//）注释。如果使用了无效的双斜杠注释，Stylelint 会发出警告或错误。
    'no-invalid-double-slash-comments': true,
    // 这个规则用于检测是否有使用未知的 CSS 属性。如果使用了未知的 CSS 属性，Stylelint 会发出警告或错误。
    'property-no-unknown': true,
    // 这个规则用于检测未知的伪类选择器
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local', 'export'],
      },
    ],
    // 这个规则用于检测未知的伪元素选择器
    'selector-pseudo-element-no-unknown': true,
    // 这个规则用于检测字符串中是否包含换行符。
    'string-no-newline': true,
    // 这个规则用于检测未知的单位。ignoreUnits: ['rpx'] 表示在检查中忽略 rpx 单位
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],

    /**
     * Stylistic issues
     * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
     */
    indentation: 2,
    // 如果一个 CSS 块（如规则集、@规则等）是多行的，那么它的结束大括号 } 之前必须有一个换行符。
    'block-closing-brace-newline-before': 'always-multi-line',
    // 如果一个 CSS 块是单行的，那么它的结束大括号 } 之前必须有一个空格。
    'block-closing-brace-space-before': 'always-single-line',
    // 如果一个 CSS 块是多行的，那么它的开始大括号 { 之后必须有一个换行符。
    'block-opening-brace-newline-after': 'always-multi-line',
    // 无论 CSS 块是单行还是多行，它的开始大括号 { 之前必须有一个空格。.example {color: red;}错误 .example { color: red; }正确
    'block-opening-brace-space-before': 'always',
    // 如果一个 CSS 块是单行的，那么它的开始大括号 { 之后必须有一个空格。.example {color: red;}错误 .example { color: red; }正确
    'block-opening-brace-space-after': 'always-single-line',
    // 十六进制颜色值中的字母必须是小写的。例如：color: #ff0000; 正确
    'color-hex-case': 'lower',
    // 这个规则规定十六进制颜色值必须使用短格式（即 3 个字符而不是 6 个字符）。例如，#fff 是正确的，而 #ffffff 是错误的
    'color-hex-length': 'short',
    // 这个规则规定注释内部的左右两侧必须有空格。例如，/* comment */ 是正确的，而 /*comment*/ 是错误的
    'comment-whitespace-inside': 'always',
    // 这个规则规定在声明属性的冒号（:）之前不允许有空格。例如，color: red; 是正确的，而 color : red; 是错误的
    'declaration-colon-space-before': 'never',
    // 这个规则规定在声明属性的冒号（:）之后必须有一个空格。例如，color: red; 是正确的，而 color:red; 是错误的。
    'declaration-colon-space-after': 'always',
    // 在单行的声明块中最多只能有一个声明语句。例如，margin: 10px; 是正确的，而 margin: 10px; padding: 5px; 在单行中是错误的。
    'declaration-block-single-line-max-declarations': 1,
    // 这个规则规定在声明块的末尾必须有分号（;）。例如，color: red; 是正确的，而 color: red 是一个错误的声明块。
    'declaration-block-trailing-semicolon': [
      'always',
      {
        severity: 'error',
      },
    ],
    // 这个规则规定在长度值为零时，不允许使用单位（如 px）。然而，它提供了一个例外：在自定义属性（custom properties）中使用零值时，可以保留单位。例如，margin: 0; 是正确的，而 margin: 0px; 是错误的，除非这个声明是在自定义属性中
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    // 每一行的最大长度
    'max-line-length': 100,
    // #id选择器的数量，0表示不允许在选择器中使用#id选择器。
    'selector-max-id': 0,
    // 用于控制CSS值列表中逗号后面的空格，设置为'always-single-line'表示在单行值列表中，逗号后面必须有一个空格。
    'value-list-comma-space-after': 'always-single-line',

    /**
     * stylelint-scss rules
     * @link https://www.npmjs.com/package/stylelint-scss
     */
    // 这个规则用于检查在双斜杠（//）注释内部是否使用了空格。设置 'always' 表示在双斜杠注释内部必须有空格。
    'scss/double-slash-comment-whitespace-inside': 'always',
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
};
