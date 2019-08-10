import webpack from 'webpack'
import merge from 'webpack-merge'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import common from './webpack.common.babel'


export default merge(common, {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new UglifyJSPlugin(),
  ],
})
