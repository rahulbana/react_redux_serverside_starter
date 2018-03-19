import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from 'shared'
import configureStore from 'shared/store'

const store = configureStore(window.__initialData__)

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
