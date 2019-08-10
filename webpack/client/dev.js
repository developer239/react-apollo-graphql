const webpack = require('webpack')
const merge = require('webpack-merge')
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
  ],
  devServer: {
    hot: true,
    port: PORT,
  },
})
