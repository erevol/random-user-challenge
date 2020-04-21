
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
      {
        test: /\.ico$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
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
});