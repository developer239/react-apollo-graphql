import path from 'path'
import { Express } from 'express'
import webpack, { Compiler } from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

export const handleWebpackDevServer = (app: Express) => {
  const webpackDevConfig = require('../../webpack/client/dev')
  const compiler = webpack(webpackDevConfig)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
  }))

  app.use(webpackHotMiddleware(compiler, { log: false }))

  return { compiler }
}

export const handleServeBaseRouteDev = ({
  compiler,
  app,
}: { app: Express, compiler: Compiler }) => {
  app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html')

    // @ts-ignore
    compiler.outputFileSystem.readFile(filename, (err: Error, result: any) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
}
