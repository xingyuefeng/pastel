const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const portfinder = require('portfinder');
const baseConfig = require('./webpack.base')

portfinder.basePort = 3000;    // default: 8000
portfinder.highestPort = 8888;


module.exports = new Promise((resolve, reject) => {
  portfinder.getPort(function (err, port) {
    resolve(merge(baseConfig, {
      mode: 'development',
      devtool: 'inline-source-map',
      entry: {
        index: './website/web/src/index.jsx',
        mobile: './website/mobile/src/index.jsx',
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
        port: port,
        compress: true,
        // noInfo: true,
        inline: true,
        hot: true,
        progress: true,
        historyApiFallback: true,
      }
    }
    ))
  })
})

