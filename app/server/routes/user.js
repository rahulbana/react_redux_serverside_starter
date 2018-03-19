import Router from 'koa-router'
import userCtrl from 'server/controllers/user'

const userRoutes = new Router({
  prefix: '/api/user'
})

userRoutes.get('/', userCtrl.getUser)
userRoutes.post('/', userCtrl.createUser)

export default userRoutes
