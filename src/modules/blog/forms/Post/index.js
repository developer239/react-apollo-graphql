import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { TextInput, TextArea, Button } from 'components'
import validate from './validate'


const PostForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field name="id" component="input" type="hidden" />
    <Field label="Post Title" name="title" placeholder="Title" component={TextInput} type="text" />
    <Field label="Description" name="text" placeholder="Description" component={TextArea} />
    <Button type="submit" disabled={submitting} bsStyle="success">
      {submitting ? 'Submitting...' : 'Submit changes'}
    </Button>
  </form>
)

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
}

export default reduxForm({
  form: 'post',
  validate,
})(PostForm)
