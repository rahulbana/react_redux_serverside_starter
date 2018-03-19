import Router from 'koa-router'
import postCtrl from 'server/controllers/post'

const postRoutes = new Router({
  prefix: '/api/post'
})

postRoutes.get('/', postCtrl.getPosts)
postRoutes.post('/', postCtrl.createPost)

export default postRoutes
