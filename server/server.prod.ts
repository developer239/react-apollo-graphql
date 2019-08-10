import fs from 'fs'
import path from 'path'
import express from 'express'
import compression from 'compression'

const PORT = process.env.PORT || 3000
const DIST_DIR = path.resolve(__dirname, 'public')

const app = express()

app.use((req, res, next) => {
  if (req.hostname !== 'localhost' && req.get('X-Forwarded-Proto') !== 'https') {
    return res.redirect(`https://${req.hostname}${req.url}`)
  }
  return next()
})

app.use(compression())

app.use(express.static(DIST_DIR))

app.get('*', (req, res) => {
  fs.readdirSync(__dirname).forEach(file => {
    console.log(file)
  })
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, () => {
  console.info('Express is listening on PORT %s.', PORT)
})
