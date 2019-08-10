import React from 'react'
import PropTypes from 'prop-types'
import { MockedProvider } from 'react-apollo/test-utils'

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
