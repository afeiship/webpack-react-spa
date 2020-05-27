module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',     // ci/cd 相关
        'chore',     // 发布相关
        'docs',      // 文档更新
        'feat',      //新功能
        'fix',       // bug 修复
        'opt',       // 功能优化
        'perf',      // 性能改进
        'refactor',  // 重构造
        'revert',    // 回滚
        'style',     // 代码风格相关
        'test'       // 测试相关
      ]
    ]
  }
};
