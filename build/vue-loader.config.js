// 自定义模块使用自定义 loader (了解，高阶内容)
// const docsLoader = require.resolve('./doc-loader')

// vue-loader 配置
module.exports = (isDev) => {
  return {
    // 去除 vue template 中的空格
    preserveWhiteSpace: true,
    // true: 将 vue 中的 CSS 单独提取到一个文件中
    extractCSS: !isDev,
    // 实现 cssModules 功能
    cssModules: {},
    // postcss // 有全局的配置文件不需要在这里配置

    // hotReload: false, // 根据环境变量生成

    // loaders: {
    // 指定不同的模块使用不同的 loader
    // 'docs': docsLoader,
    // js: 'coffe-loader',
    // html,style
    // },
    // preLoader: {},
    // postLoader: {}


  }
}
