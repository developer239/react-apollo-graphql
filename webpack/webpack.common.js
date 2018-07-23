const DllLinkPlugin = require("dll-link-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')


const DIST_DIR = 'public'
const SRC_DIR = 'src'

module.exports = {
  output: {
    publicPath: '/',
    filename: '[name]-[hash].min.js',
    path: path.resolve(__dirname, '..', DIST_DIR),
  },
  plugins: [
    new CleanWebpackPlugin(
      [DIST_DIR],
      {
        exclude: ['vendor'],
      },
    ),
    new HtmlWebpackPlugin({
      template: 'src/static/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new DllLinkPlugin({
      config: require('./webpack.dll'),
      htmlMode: true,
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '..', SRC_DIR, 'static'), to: '.' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      './node_modules',
      './src',
    ],
  },
}
