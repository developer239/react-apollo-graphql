const path = require('path')

const DIST_DIR = 'build'

module.exports = {
  mode: 'production',
  entry: './server/server.prod.ts',
  target: 'node',
  node: {
    __dirname: false,
  },
  output: {
    publicPath: '/',
    filename: 'server.js',
    path: path.resolve(__dirname, '..', '..', DIST_DIR),
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
}
