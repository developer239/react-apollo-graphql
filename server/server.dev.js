import path from 'path'
import express from 'express'
import webpack from 'webpack'
import invariant from 'invariant'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevConfig from '../webpack/webpack.dev.babel'


const PORT = 3000
const DIST_DIR = path.resolve(__dirname, '..', 'public')

const app = express()

const compiler = webpack(webpackDevConfig)
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  quiet: true,
}))
app.use(webpackHotMiddleware(compiler, { log: false }))

// Serve static files from /public directory
app.use(express.static(DIST_DIR))

// This is kind of a History Api Fallback
app.use('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html')
  // eslint-disable-next-line
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})

app.listen(PORT, (error) => {
  invariant(!error, 'Something failed: ', error)
  // eslint-disable-next-line
  console.info('Express is listening on PORT %s.', PORT)
})
