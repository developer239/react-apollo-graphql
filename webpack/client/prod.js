const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.tsx',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
})
