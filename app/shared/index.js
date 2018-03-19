import React from 'react'
import { Route } from 'react-router-dom'
import routes from 'shared/routes'

import 'shared/styles/base.scss'

const App = () => {
  return (
    <div>
      {routes.map((route, i) => <Route key={i} {...route} />)}
    </div>
  )
}

export default App
