const webpack = require('webpack')
const path = require('path')


const MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development'

// These libraries are built only once.
const vendors = [
  'apollo-client',
  'apollo-link',
  'apollo-link-http',
  'apollo-link-state',
  'formik',
  'graphql',
  'graphql-tag',
  'react',
  'react-apollo',
  'react-dom',
  'react-router-config',
  'react-router-dom',
  'recompose',
  'styled-components',
  'yup',
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
