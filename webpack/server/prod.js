const path = require('path')
const {
  BUILD_DIR,
} = require('../config')

module.exports = {
  mode: 'production',
  entry: './server/prod.ts',
  target: 'node',
  node: {
    __dirname: false,
  },
  output: {
    publicPath: '/',
    filename: 'server.js',
    path: path.resolve(__dirname, '..', '..', BUILD_DIR),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
}
