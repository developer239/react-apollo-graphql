const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./common')
const {
  PORT,
  BUILD_DIR,
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
    contentBase: path.resolve(__dirname, BUILD_DIR),
    port: PORT,
  },
})
