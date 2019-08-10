import React from 'react'
import ReactDOM from 'react-dom'

interface Hello {
  world: string
}

const hello: Hello = {
  world: 'Michal'
}

const App = () => {
  return (
    <div>
      Hello React,Webpack 4 & Babel 7! <br />
      <br />
      Hello {hello.world}!
    </div>
  )
}

const renderApp = () =>
  ReactDOM.render(<App />, document.querySelector('#root'))

renderApp()

if (module.hot) {
  module.hot.accept()
}
