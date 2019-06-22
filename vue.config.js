const path = require('path')
// 项目部署的基础路径
// 我们默认假设你的应用将会部署在域名的根部，
// 比如 https://www.my-app.com/
// 如果你的应用时部署在一个子路径下，那么你需要在这里
// 指定子路径。比如，如果你的应用部署在
// https://www.foobar.com/my-app/
// 那么将这个值改为 `/my-app/`
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: false,
  baseUrl: BASE_URL,
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // 设置代理
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
