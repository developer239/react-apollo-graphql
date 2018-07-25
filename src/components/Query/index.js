import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { Spinner, Message } from 'components'


export const QueryWrapper = ({ query, variables, children }) => (
  <Query query={query} variables={variables}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Spinner />
      }

      if (error) {
        return <Message type="error" text={`Error! ${error.message}`} />
      }

      return children({ data })
    }}
  </Query>
)

QueryWrapper.defaultProps = {
  variables: null,
}

QueryWrapper.propTypes = {
  query: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  variables: PropTypes.object,
}

export default QueryWrapper
