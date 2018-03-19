import Router from 'koa-router'
import categoryCtrl from 'server/controllers/category'

const categoryRoutes = new Router({
  prefix: '/api/category'
})

categoryRoutes.get('/', categoryCtrl.getCategories)
categoryRoutes.post('/', categoryCtrl.createCategory)
categoryRoutes.get('/:id', categoryCtrl.getCategoryById)

export default categoryRoutes
