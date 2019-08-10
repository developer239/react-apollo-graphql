import React from 'react'
import PropTypes from 'prop-types'
import { MockedProvider } from 'react-apollo/test-utils'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles'
import 'jest-styled-components'
import 'jsdom-global/register'


const Provider = ({ mocks, children }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </MockedProvider>
)

Provider.defaultProps = {
  mocks: [],
}

Provider.propTypes = {
  mocks: PropTypes.any,
  children: PropTypes.node.isRequired,
}

export default Provider
