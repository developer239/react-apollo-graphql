const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const Dotenv = require('dotenv-webpack')
const common = require('./common')
const {
  PORT,
} = require('../config')

module.exports = merge(common, {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true&overlay=false',
    './src/index.tsx'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', '..', '.env.development'),
    }),
  ],
  devServer: {
    hot: true,
    port: PORT,
  },
})
