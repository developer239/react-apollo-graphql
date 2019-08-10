import * as React from 'react'
import * as ReactDOM from 'react-dom'

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

ReactDOM.render(<App />, document.querySelector('#root'))
