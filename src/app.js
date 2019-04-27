import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, NavBar } from 'ui-react-library'
import Routes from './routes'


const NAV_LINKS = [
  { id: 1, to: '/', label: 'home', component: Link },
  { id: 2, to: '/counter', label: 'counter', component: Link },
  { id: 3, to: '/posts', label: 'blog', component: Link },
]

const App = () => (
  <Layout>
    <NavBar links={NAV_LINKS} activeRoute="/" />
    <Routes />
  </Layout>
)

App.propTypes = {}

export default App
