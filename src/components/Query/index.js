import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import Spinner from '../Spinner'
import Message from '../Message'


export const QueryWrapper = ({ children, ...rest }) => (
  <Query {...rest}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Spinner />
      }

      if (error) {
        return <Message type="error" text={`Error! ${error.message}`} />
      }

      return children({ loading, error, data })
    }}
  </Query>
)

QueryWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default QueryWrapper
