const merge = require('webpack-merge')
const common = require('./webpack.common')

const DEV_PORT = 3000

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: DEV_PORT,
  },
})
