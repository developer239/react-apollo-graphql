import path from 'path'

export const PORT = process.env.PORT || 3000
export const BUILD_DIR_PUBLIC = process.env.BUILD_DIR_PUBLIC || 'public'
export const PATH_TO_BUILD_DIR_PUBLIC = process.env.PATH_TO_BUILD_DIR_PUBLIC || path.resolve(__dirname, BUILD_DIR_PUBLIC)
