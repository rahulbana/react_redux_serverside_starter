
import React from 'react'
import serialize from 'serialize-javascript'
import { matchPath, StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import App from 'shared'
import configureStore from 'shared/store'
import routes from 'shared/routes'

export const baseCtrl = async (ctx, next) => {
  const haveRoute = routes.some(route => {
    return matchPath(ctx.req.url, route)
  })
  if (haveRoute) {
    const store = configureStore()
    const context = {}
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter location={ctx.req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    )
    const initialData = store.getState()
    ctx.type = 'html'
    ctx.status = 200
    ctx.body = `
      <!DOCTYPE html>
        <html>
        <head>
          <title>SSR Demo</title>
        </head>
        <body>
          <div id='root'>${markup}</div>
          <script>window.__initialData__ = ${serialize(initialData)}</script>
          <script src='/bundle.js'></script>
        </body>
        </html>
      `
  } else {
    ctx.throw(404)
    await next()
  }
}
