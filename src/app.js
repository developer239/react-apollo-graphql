import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { renderRoutes } from 'react-router-config'
import { Content, Navbar } from 'components'


const NAV_LINKS = [
  { id: 1, to: '/', label: 'home' },
  { id: 2, to: '/counter', label: 'counter' },
  { id: 3, to: '/posts', label: 'blog' },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const App = ({ route, location }) => (
  <Container>
    <Navbar links={NAV_LINKS} activeRoute={location.pathname} />
    <Content>
      {renderRoutes(route.routes)}
    </Content>
  </Container>
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
