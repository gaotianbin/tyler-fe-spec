module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    // 规定提交信息的身体部分必须以空行为开头。这里的1表示这是一个警告级别的规则（而不是错误级别），这意味着即使违反了这个规则，提交信息也不会被阻止，但是会发出警告提醒
    'body-leading-blank': [1, 'always'],
    // 这是限制提交信息主体部分的每行文本长度不能超过100个字符的规则。2表示这是一个错误级别的规则，如果违反了这个规则，提交信息会被阻止。
    'body-max-line-length': [2, 'always', 100],
    // 规定提交信息的底部部分必须以空行为开头，和主体部分的规则类似，这是一个警告级别的规则。
    'footer-leading-blank': [1, 'always'],
    // 限制提交信息的底部部分每行文本的长度不能超过100个字符。2表示这是一个错误级别的规则，如果违反了这个规则，提交信息会被阻止。
    'footer-max-line-length': [2, 'always', 100],
    // 限制提交信息的标题（即第一行）的长度不能超过100个字符。2表示这是一个错误级别的规则，如果违反了这个规则，提交信息会被阻止。
    'header-max-length': [2, 'always', 100],
    // 规定提交信息的作用域部分必须全部使用小写字母，这是一个错误级别的规则。
    'scope-case': [2, 'always', 'lower-case'],
    // 这个规则被禁用，意味着提交信息的主题部分的大小写没有特定的格式要求。
    'subject-case': [0],
    // 规定提交信息的主题部分不能为空，这是一个错误级别的规则。
    'subject-empty': [2, 'never'],
    // 规定提交信息的主题部分不能以句号（.）结尾，这是一个错误级别的规则。
    'subject-full-stop': [2, 'never', '.'],
    // 规定提交信息的类型部分必须全部使用小写字母，这是一个错误级别的规则。
    'type-case': [2, 'always', 'lower-case'],
    // 规定提交信息的类型部分不能为空，这是一个错误级别的规则。
    'type-empty': [2, 'never'],
    // 规定提交信息的类型部分必须是特定的值之一，比如feat（新功能）、fix（修复bug）等等，这是一个错误级别的规则。
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']],
  },
};
