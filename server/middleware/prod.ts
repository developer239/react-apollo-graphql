import path from 'path'
import { Express } from 'express'
import compression from 'compression'
import { BUILD_DIR_PUBLIC } from '../config'

export const handleHttpsRedirect = (app: Express) =>
  app.use((req, res, next) => {
    if (
      req.hostname !== 'localhost' &&
      req.get('X-Forwarded-Proto') !== 'https'
    ) {
      return res.redirect(`https://${req.hostname}${req.url}`)
    }
    return next()
  })

// TODO: Fix typescript error
export const handleCompression = (app: Express) => app.use(compression() as any)

export const handleServeBaseRoute = (app: Express) =>
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, BUILD_DIR_PUBLIC, 'index.html'))
  })
