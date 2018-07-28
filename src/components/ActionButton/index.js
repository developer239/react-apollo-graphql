import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import Button from 'components/Button'


const ActionButton = ({ mutation, variables, update, label, btnBgType, onCompleted }) => (
  <Mutation mutation={mutation} variables={variables} update={update} onCompleted={onCompleted}>
    {(mutate, { loading }) => (
      <Button
        disabled={loading}
        onClick={mutate}
        bgType={btnBgType}
      >
        {loading ? '...' : label}
      </Button>
    )}
  </Mutation>
)

ActionButton.defaultProps = {
  onCompleted: null,
  update: null,
  variables: null,
  btnBgType: null,
}

ActionButton.propTypes = {
  mutation: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  btnBgType: PropTypes.string,
  variables: PropTypes.object,
  update: PropTypes.func,
  onCompleted: PropTypes.func,
}

export default ActionButton
