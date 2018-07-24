import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { renderRoutes } from 'react-router-config'
import { Content, Navbar } from 'components'


const NAV_LINKS = [
  { id: 1, to: '/', label: 'Home' },
  { id: 2, to: '/counter', label: 'Counter' },
  { id: 3, to: '/posts', label: 'Blog' },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const App = ({ route }) => (
  <Container>
    <Navbar links={NAV_LINKS} />
    <Content>
      {renderRoutes(route.routes)}
    </Content>
  </Container>
)

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array.isRequired,
  }).isRequired,
}

export default App
