import React from 'react'
import PropTypes from 'prop-types'
import { Mutation, Button } from 'components'


const DeleteButton = ({ mutation, variables }) => (
  <Mutation mutation={mutation} variables={variables}>
    {(mutate) => <Button onClick={mutate} bgType="error">delete</Button>}
  </Mutation>
)

DeleteButton.propTypes = {
  mutation: PropTypes.object.isRequired,
  variables: PropTypes.object.isRequired,
}

export default DeleteButton
