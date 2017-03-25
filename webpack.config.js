const { resolve } = require('path')
const webpack = require('webpack')


module.exports = (env) => {
  const nodeEnv = env && env.prod ? 'production' : 'develop'
  const isProd = nodeEnv === 'production'

  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
    new webpack.NamedModulesPlugin(),
  ];

  let entry = [];
  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false,
        },
      })
    );
    entry = [
      './index.jsx',
    ];
  } else {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    )
    entry = [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index.jsx',
    ];
  }

  return {
    entry,
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'eslint-loader',
          include: resolve(process.cwd(), 'src'),
          enforce: 'pre',
          options: {
            fix: true,
          },
        },
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader?modules', 'sass-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          use: [
            'babel-loader',
          ],
          exclude: /node_modules/,
        },
        {
          test: /.*\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              query: {
                progressive: true,
                pngquant: {
                  quality: '65-90',
                  speed: 4,
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [
        './src',
        './src/modules',
        './node_modules',
      ],
    },
    plugins,
    performance: isProd && {
      maxAssetSize: 100,
      maxEntrypointSize: 300,
      hints: 'warning',
    },
    stats: {
      colors: {
        green: '\u001b[32m',
      },
    },
    devServer: {
      hot: !isProd,
      contentBase: resolve(__dirname, 'dist'),
      publicPath: '/',
      historyApiFallback: {
        rewrites: [{
          from: /\/(\d\.)?bundle\.js(\.map)?/,
          to: context => context.match[0],
        }],
      },
      port: 8080,
      compress: isProd,
      inline: !isProd,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        },
      },
    },
  };
}
