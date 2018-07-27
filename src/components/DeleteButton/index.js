import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import Button from 'components/Button'


const DeleteButton = ({ mutation, variables, update }) => (
  <Mutation mutation={mutation} variables={variables} update={update}>
    {(mutate, { loading }) => (
      <Button onClick={mutate} bgType="error">{loading ? '...' : 'delete'}</Button>
    )}
  </Mutation>
)

DeleteButton.defaultProps = {
  update: null,
}

DeleteButton.propTypes = {
  mutation: PropTypes.object.isRequired,
  variables: PropTypes.object.isRequired,
  update: PropTypes.func,
}

export default DeleteButton
