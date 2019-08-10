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
    extensions: ['.ts', '.js'],
    modules: ['./node_modules', './src'],
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
