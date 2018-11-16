import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { Spinner, Alert } from '@michal.jarnot/ui-components'


export const QueryWrapper = ({ children, ...rest }) => (
  <Query {...rest}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Spinner />
      }

      if (error) {
        return <Alert isError>`Error! {error.message}`</Alert>
      }

      return children({ loading, error, data })
    }}
  </Query>
)

QueryWrapper.defaultProps = {
  children: () => null,
}

QueryWrapper.propTypes = {
  children: PropTypes.func,
}

export default QueryWrapper
