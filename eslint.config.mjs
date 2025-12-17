import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,

  // 自定义规则
  rules: {
    // 允许使用 process 全局变量
    'node/prefer-global/process': 'off',
    // 允许变量在定义前使用（函数提升）
    'ts/no-use-before-define': 'off',
    // 事件名必须使用 camelCase
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    // 允许 console.log
    'no-console': 'off',
    // 关闭 props 必须可选的警告
    'vue/no-required-prop-with-default': 'off',
    // 关闭模板变量遮蔽警告
    'vue/no-template-shadow': 'off',
    // 关闭 jsdoc 参数名检查
    'jsdoc/check-param-names': 'off',
    'jsdoc/require-returns-check': 'off',
    'jsdoc/require-returns-description': 'off',
    // 关闭正则表达式捕获组检查
    'regexp/no-unused-capturing-group': 'off',
    // 允许 new 用于副作用
    'no-new': 'off',
    // 允许 innerText
    'unicorn/prefer-dom-node-text-content': 'off'
  },

  // 忽略文件
  ignores: ['node_modules', 'dist', 'public', '.vscode/**', 'src/assets/**']
})
