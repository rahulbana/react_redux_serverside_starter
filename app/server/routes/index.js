import baseRoutes from './base'
import categoryRoutes from './category'
import postRoutes from './post'
import userRoutes from './user'

export const setupRoutes = (app) => {
  app.use(categoryRoutes.routes())
  app.use(postRoutes.routes())
  app.use(userRoutes.routes())  
  app.use(baseRoutes.routes())
}
