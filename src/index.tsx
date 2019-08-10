import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app'

const renderApp = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.querySelector('#root')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept()
}
