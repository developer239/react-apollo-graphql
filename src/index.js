import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import client from './apolloClient'


const render = () => {
  ReactDOM.render(
    (
      <ApolloProvider client={client}>
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </ApolloProvider>
    ),
    // eslint-disable-next-line
    document.getElementById('root'),
  )
}

render()

if (module.hot) {
  module.hot.accept()
}
