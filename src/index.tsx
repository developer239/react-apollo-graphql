import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { App } from 'app'
import { apolloClient } from 'apolloClient'
import { browserHistory } from 'appHistory'

const renderApp = () => {
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </ApolloProvider>,
    document.querySelector('#root')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept()
}
