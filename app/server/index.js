import Koa from 'koa'
import { serverSetup } from 'server/config/koa'
import { setupRoutes } from 'server/routes'

const port = process.env.SERVER_PORT
const env = process.env.NODE_ENV || 'development'
const app = new Koa()

serverSetup(app)
require('./config/db')()
setupRoutes(app)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} in ${env} mode`)
})

export default app
