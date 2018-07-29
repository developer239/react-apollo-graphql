import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import client from './apolloClient'
import injectGlobal, { theme } from './styles'


injectGlobal()

const render = () => {
  ReactDOM.render(
    (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            {renderRoutes(routes)}
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    ),
    document.getElementById('root'),
  )
}

render()

if (module.hot) {
  module.hot.accept()
}
