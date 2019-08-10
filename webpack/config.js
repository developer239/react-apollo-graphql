const PORT = process.env.PORT || 3000
const BUILD_DIR = process.env.BUILD_DIR || 'build'
const BUILD_DIR_PUBLIC = process.env.BUILD_DIR_PUBLIC || 'public'

module.exports = {
  PORT,
  BUILD_DIR,
  BUILD_DIR_PUBLIC,
}
