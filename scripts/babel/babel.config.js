module.exports = {
  presets: [
    // 使用最新js语法的编译
    ['@babel/env', {
      modules: false,
    }],
    // 编译react jsx
    '@babel/react',
    // 编译typescript 用webpack的话无需使用ts-loader
    '@babel/typescript',
  ],
  plugins: [
    // 动态加载 用于代码分割
    '@babel/plugin-syntax-dynamic-import',
    // 支持装饰器
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', { corejs: 2 }],

    // plugin-babel-import config
    // 支持组件按需加载
    // ['import', { libraryName: 'pastel', libraryDirectory: 'components', style: true }, 'antd'],
    // ["import", {
    //   "libraryName": "antd",
    //   "libraryDirectory": "es",
    //   "style": "css" // `style: true` 会加载 less 文件
    // }]
  ],

  env: {
    // babel 可以区分环境 test环境下使用的插件
    test: {
      plugins: [
        // ES2015 模块编译成commonjs
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
  },
};