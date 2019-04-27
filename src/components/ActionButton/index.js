import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { Button } from 'ui-react-library'

const ActionButton = ({ label, type, ...rest }) => (
  <Mutation {...rest}>
    {(mutate, { loading }) => (
      <Button
        disabled={loading}
        onClick={mutate}
        isLoading={loading}
        type={type}
      >
        {loading ? '...' : label}
      </Button>
    )}
  </Mutation>
)

ActionButton.defaultProps = {
  type: null,
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default ActionButton
