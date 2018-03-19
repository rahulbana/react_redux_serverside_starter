import convert from 'koa-convert'
import serve from 'koa-static'
import { errorHandler } from 'server/middleware/error'
//mongodb://rahulbana:123456@ds249325.mlab.com:49325/banadb
export const serverSetup = function(app) {
  app.use(convert(serve('dist')))
  app.use(errorHandler)
}
