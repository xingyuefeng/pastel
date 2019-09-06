const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelConfig = require('../babel/babel.config')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    // 以html文件为基础 查找文件 对于动态加载特别重要
    publicPath:'/'
    // chunkFilename: '[name].bundle.js',
  },
  resolve: {
    // modules: ['node_modules'],
    alias: {
    },
  },
 
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'postcss-loader',
      //   ],
      // },
      {
        test: /\.(less|css)$/,
          use: [
          {
            loader:  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009',
                  },
                  stage: 3,
                }),
              ],
            },
          },
          {
            loader: 'less-loader',
            options: {
              // 处理编译less报错
              javascriptEnabled: true
            }
          },
          
        ],
      },
      {
        test: /\.(jsx|js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader?limit=1&name=images/[name].[hash:8].[ext]',
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader?name=fonts/[name].[hash:8].[ext]',
          },
        ],
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ]
  },
  
  plugins: [
    // new webpack.ProgressPlugin(),
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'react-app',
    //   // cm1: 'cm1.dll.js',
    //   // ui: 'ui.dll.js',
    //   template: path.resolve(__dirname, './temp.html')
    // }),
    // new MiniCssExtractPlugin({
    //   filename: devMode ? '[name].css' : '[name].[hash].css',
    //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    // }),
    // new webpack.DefinePlugin({
    //   DEVELOPMENT: JSON.stringify(devMode),
    // })
  ]
}