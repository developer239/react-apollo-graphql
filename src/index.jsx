import React from 'react'
import ReactDOM from 'react-dom'

// Makes hot module replacement possible
import { AppContainer } from 'react-hot-loader'

// This is our App with ApolloProvider and Router
import AppRouter from 'routes'


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

// Render App
render(AppRouter)

// Render App with hot module replacements
if (module.hot) {
  module.hot.accept('routes', () => {
    const NewApp = require('./routes').default
    render(NewApp)
  })
}
