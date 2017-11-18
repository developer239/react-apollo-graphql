import webpack from 'webpack'
import path from 'path'


const vendors = [
  'apollo-cache-inmemory',
  'apollo-client',
  'apollo-link-http',
  'graphql',
  'graphql-tag',
  'react',
  'react-apollo',
  'react-bootstrap',
  'react-dom',
  'react-nl2br',
  'react-redux',
  'react-router-bootstrap',
  'react-router-dom',
  'recompose',
  'redux',
  'redux-form',
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
