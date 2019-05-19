const merge = require('webpack-merge')
const common = require('./webpack.config.common')
const Webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8888,
    open: true,
    overlay: true,
    contentBase: './dist',
    hotOnly: true
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
})