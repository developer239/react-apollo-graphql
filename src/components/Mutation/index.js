import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import Spinner from '../Spinner'
import Message from '../Message'


export const MutationWrapper = ({ children, ...rest }) => (
  <Mutation {...rest}>
    {(mutate, { loading, error, data }) => {
      if (loading) {
        return <Spinner />
      }

      if (error) {
        return <Message type="error" text={`Error! ${error.message}`} />
      }

      return children(mutate, { loading, error, data })
    }}
  </Mutation>
)

MutationWrapper.defaultProps = {
  children: () => null,
}

MutationWrapper.propTypes = {
  children: PropTypes.func,
}

export default MutationWrapper
