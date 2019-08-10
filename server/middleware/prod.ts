import fs from 'fs'
import path from 'path'
import { Express } from 'express'
import compression from 'compression'

export const handleHttpsRedirect = (app: Express) => app.use((req, res, next) => {
  if (req.hostname !== 'localhost' && req.get('X-Forwarded-Proto') !== 'https') {
    return res.redirect(`https://${req.hostname}${req.url}`)
  }
  return next()
})

export const handleCompression = (app: Express) =>
  app.use(compression())

export const handleServeBaseRoute = (app: Express) =>
  app.get('*', (req, res) => {
    fs.readdirSync(__dirname).forEach(file => {
      console.log(file)
    })
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })
