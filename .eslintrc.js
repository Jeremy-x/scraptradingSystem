module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    "no-console":"off",//在这禁止掉console报错检查
　　 "no-irregular-whitespace":"off"//这禁止掉 空格报错检查
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
