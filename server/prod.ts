/* eslint-disable no-console */
import express from 'express'
import { PATH_TO_BUILD_DIR_PUBLIC, PORT } from './config'
import {
  handleCompression,
  handleHttpsRedirect,
  handleServeBaseRoute,
} from './middleware/prod'

const app = express()

app.use(express.static(PATH_TO_BUILD_DIR_PUBLIC))

handleHttpsRedirect(app)
handleCompression(app)
handleServeBaseRoute(app)

app.listen(PORT, () => {
  console.info('Express is listening on PORT %s.', PORT)
})
