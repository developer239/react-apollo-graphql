const webpack = require('webpack')
const path = require('path')


const MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development'

// TODO: Update modules
// These libraries are built only once.
const vendors = [
  'react',
]

module.exports = {
  mode: MODE,
  devtool: 'source-map',
  entry: {
    vendors,
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
  output: {
    publicPath: '/',
    filename: 'vendors-[hash].js',
    path: path.resolve(__dirname, '..', 'public', 'vendor'),
    library: 'vendor',
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'vendor',
      path: path.resolve(__dirname, '..', 'public', 'vendor', 'vendor-manifest.json'),
    }),
  ],
}
