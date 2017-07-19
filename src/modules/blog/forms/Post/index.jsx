import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import styles from './styles.scss'


const IdInput = componentProps => (<FormGroup>
  <FormControl
    value={componentProps.input.value}
    onChange={componentProps.input.onChange}
    type="hidden"
    placeholder="id"
  />
</FormGroup>)

const TitleInput = componentProps => (<FormGroup>
  <ControlLabel>Title:</ControlLabel>
  <FormControl
    value={componentProps.input.value}
    onChange={componentProps.input.onChange}
    type="text"
    placeholder="title"
  />
</FormGroup>)

const TextInput = componentProps => (<FormGroup>
  <ControlLabel>Text:</ControlLabel>
  <FormControl
    value={componentProps.input.value}
    onChange={componentProps.input.onChange}
    componentClass="textarea"
    placeholder="Write your text here."
    style={{ height: 150 }}
  />
</FormGroup>)

const PostForm = (props) => {
  const { handleSubmit, submitting, handleDelete, isDeleting } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field name="id" type="text" component={IdInput} />
      <Field name="title" type="text" component={TitleInput} />
      <Field name="text" type="text" component={TextInput} />

      <Button className={styles.button} type="submit" bsStyle="primary" disabled={submitting}>
        {submitting ? 'Saving...' : 'Save changes'}
      </Button>
      {!!handleDelete &&
      <Button
        className={styles.button}
        type="button"
        bsStyle="danger"
        disabled={isDeleting}
        onClick={handleDelete}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>}
    </form>
  )
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  handleDelete: PropTypes.func,
  isDeleting: PropTypes.bool,
}

export default reduxForm({
  form: 'post',
})(PostForm)
