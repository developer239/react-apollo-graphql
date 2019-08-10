import React from 'react'
import { Grid, PageHeader } from 'react-bootstrap'
import styles from './styles.scss'


const About = () => (
  <Grid>
    <PageHeader>React Redux Apollo GraphQL Hot Boilerplate</PageHeader>
    <h1>About</h1>
    <p>Backend is provided by <a
      href="https://www.graph.cool/" target="_blank"
      rel="noopener noreferrer"
    ><strong>graph.cool</strong></a>.</p>
    <ul>
      <li>Hot reloading</li>
      <li>
        <a href="https://github.com/webpack/webpack" target="_blank" rel="noopener noreferrer">Webpack2</a>
      </li>
      <li>
        <a href="https://github.com/apollographql/react-apollo" target="_blank" rel="noopener noreferrer">React Apollo</a>
      </li>
      <li>
        <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">React</a>
      </li>
      <li>
        <a href="https://github.com/rackt/react-router" target="_blank" rel="noopener noreferrer">React Router</a>
      </li>
      <li>
        <a href="https://github.com/rackt/redux" target="_blank" rel="noopener noreferrer">Redux</a>
      </li>
      <li>
        <a href="https://github.com/reactjs/react-router-redux" target="_blank" rel="noopener noreferrer">React Router Redux</a>
      </li>
      <li>
        <a href="https://github.com/erikras/redux-form" target="_blank" rel="noopener noreferrer">Redux-form</a>
      </li>
      <li>
        <a href="https://github.com/facebook/jest" target="_blank" rel="noopener noreferrer">Jest</a>
      </li>
      <li>
        <a href="https://github.com/airbnb/enzyme" target="_blank" rel="noopener noreferrer">Enzyme</a>
      </li>
      <li>
        <a href="https://github.com/gaearon/redux-devtools" target="_blank" rel="noopener noreferrer">Redux Dev Tools</a>
      </li>
    </ul>
    <h1>Installation</h1>
    <code className={styles.code_block}>npm run install</code>
    <h1>Running dev server</h1>
    <p>
      You do <strong>NOT</strong> need to run your own GraphQL server. Simply
      run the <code>npm run dev</code> command. If you want to work with your own backend
      change the <code>API_URL</code> value in <code>src/config/index.js</code>.
    </p>
    <h1>Production</h1>
    <p>
      If you want to run production with <code>webpack-dev-server</code>:
    </p>
    <code className={styles.code_block}>production:webpack</code>
    <p>If you would rather use static files use the build command:</p>
    <code className={styles.code_block}>production:build</code>
    <h1>Running tests</h1>
    <code className={styles.code_block}>npm run test</code>
    <h1>To do</h1>
    <span className={styles.todo_item}>
      <input type="checkbox" disabled /> Add support for continuous integration with
      <a href="https://github.com/jenkinsci" target="_blank" rel="noopener noreferrer"> jenkins </a>
      or <a href="https://github.com/travis-ci/travis-ci" target="_blank" rel="noopener noreferrer">travis</a>
    </span>
    <span className={styles.todo_item}>
      <input type="checkbox" disabled /> Add
      <a
        href="https://github.com/nightwatchjs/nightwatch"
        target="_blank"
        rel="noopener noreferrer"
      > nightwatch</a> in order to support E2E testing
    </span>
    <span className={styles.todo_item}>
      <input type="checkbox" disabled /> Create separate branch with
      <a
        href="https://github.com/facebook/immutable-js"
        target="_blank"
        rel="noopener noreferrer"
      > immutable</a>
    </span>
    <span className={styles.todo_item}>
      <input type="checkbox" disabled /> Create separate branch with
      <a href="https://github.com/facebook/flow" target="_blank" rel="noopener noreferrer"> flow</a>
    </span>
    <span className={styles.todo_item}>
      <input type="checkbox" disabled /> Add
      <a href="https://github.com/stylelint/stylelint" target="_blank" rel="noopener noreferrer"> stylelint</a>
    </span>
    <span className={styles.todo_item}>
      <input type="checkbox" disabled /> Add form validation
    </span>
    <span className={styles.todo_item}>
      <input type="checkbox" checked disabled /> Optimize production build
    </span>
  </Grid>
)

export default About
