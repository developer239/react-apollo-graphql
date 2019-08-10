import path from 'path'
import express from 'express'
import webpack from 'webpack'
import invariant from 'invariant'
import webpackDevMiddleware from 'webpack-dev-middleware'

const webpackDevConfig = require('../webpack/webpack.dev')
const compiler = webpack(webpackDevConfig)

const PORT = 3000
const DIST_DIR = path.resolve(__dirname, '..', 'public')

const app = express()

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
}))

app.use(express.static(DIST_DIR))

app.use('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html')

  // TODO: remove ts-ignore
  // @ts-ignore
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

  console.info('Express is listening on PORT %s.', PORT)
})
