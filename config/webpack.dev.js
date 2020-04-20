
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    hotOnly: true,
    // eslint-disable-next-line no-undef
    contentBase: path.resolve(__dirname, '../src'),
    historyApiFallback: true,
    host: 'localhost',
    disableHostCheck: true,
    port: '3000',
    publicPath: '/',
  },
})