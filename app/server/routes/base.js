import Router from 'koa-router'
import { baseCtrl } from 'server/controllers/base'
import { isAuthorize } from 'server/middleware/authorization'

const baseRoutes = new Router()

baseRoutes.get('*', isAuthorize, baseCtrl)

export default baseRoutes
