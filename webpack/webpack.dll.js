const webpack = require('webpack')
const path = require('path')

// TODO: Update modules
const vendors = [
  'apollo-cache-inmemory',
  'apollo-client',
  'apollo-link-http',
  'graphql',
  'graphql-tag',
  'react',
  'react-apollo',
  'react-dom',
  'react-router-dom',
  'recompose',
]

module.exports = {
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
    filename: 'vendors.js',
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
