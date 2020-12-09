/*
 * @Descripttion:
 * @version:
 * @Author: zzp
 * @Date: 2020-12-08 00:57:25
 * @LastEditors: zzp
 * @LastEditTime: 2020-12-09 22:17:42
 */
const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  devServer: {
    open: false,
    port: 8888
  },
}