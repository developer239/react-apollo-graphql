import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Layout, NavBar } from '@michal.jarnot/ui-components'
import { renderRoutes } from 'react-router-config'


const NAV_LINKS = [
  { id: 1, to: '/', label: 'home', component: Link },
  { id: 2, to: '/counter', label: 'counter', component: Link },
  { id: 3, to: '/posts', label: 'blog', component: Link },
]

const App = ({ route, location: { pathname } }) => (
  <Layout>
    <NavBar links={NAV_LINKS} activeRoute={pathname} />
    {renderRoutes(route.routes)}
  </Layout>
)

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default App
