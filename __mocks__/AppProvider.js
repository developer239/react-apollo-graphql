import React from 'react'
import PropTypes from 'prop-types'
import { MockedProvider } from 'react-apollo/test-utils'
import 'jest-styled-components'
import 'jsdom-global/register'


const Provider = ({ mocks, children }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {children}
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
