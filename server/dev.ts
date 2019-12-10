/* eslint-disable no-console */
import express from 'express'
import { PATH_TO_BUILD_DIR_PUBLIC, PORT } from './config'
import {
  handleServeBaseRouteDev,
  handleWebpackDevServer,
} from './middleware/dev'

const app = express()

app.use(express.static(PATH_TO_BUILD_DIR_PUBLIC))

const { compiler } = handleWebpackDevServer(app)

handleServeBaseRouteDev({
  compiler,
  app,
})

app.listen(PORT, () => {
  console.info('Express is listening on PORT %s.', PORT)
})
