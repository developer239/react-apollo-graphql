import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import store from './store'
import routes from './routes'
import client from './apolloClient'


const render = () => {
  ReactDOM.render(
    (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            {renderRoutes(routes)}
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    ),
    // eslint-disable-next-line
    document.getElementById('root'),
  )
}

render()

if (module.hot) {
  module.hot.accept()
}
