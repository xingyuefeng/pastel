const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig,  {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      index: './website/web/index.js',
      mobile: './website/mobile/index.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './website/web/index.html',
        filename: 'index.html',
        chunks: ['index'],
        // favicon: './site/favicon.ico',
      }),
      new HtmlWebpackPlugin({
        template: './website/mobile/index.html',
        filename: 'mobile.html',
        chunks: ['mobile'],
        // favicon: './site/favicon.ico',
      }),
    ],
    devServer: {
      host: '0.0.0.0',
      port: 3000,
      compress: true,
      noInfo: true,
      inline: true,
      hot: true,
      progress: true,
    }
  }
)
