import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'

const renderApp = () =>
  ReactDOM.render((
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  ), document.querySelector('#root'))

renderApp()

if (module.hot) {
  module.hot.accept()
}
