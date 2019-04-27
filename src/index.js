import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { global, theme } from 'ui-react-library'
import client from 'apolloClient'
import App from './app'

const GlobalStyle = global()

const render = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept()
}
