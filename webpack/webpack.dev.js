const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const DEV_PORT = 3000

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
    contentBase: './dist',
    port: DEV_PORT,
  },
})
