import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { Button } from '@michal.jarnot/ui-components'


const ActionButton = ({ label, ...rest }) => (
  <Mutation {...rest}>
    {(mutate, { loading }) => (
      <Button
        disabled={loading}
        onClick={mutate}
        isLoading={loading}
      >
        {label}
      </Button>
    )}
  </Mutation>
)

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
}

export default ActionButton
