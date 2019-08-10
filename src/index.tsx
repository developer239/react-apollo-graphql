import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { App } from './app'
import { apolloClient } from './apolloClient'

const renderApp = () => {
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>,
    document.querySelector('#root')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept()
}
