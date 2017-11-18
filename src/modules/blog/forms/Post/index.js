import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { TextInput, TextArea, Button } from 'components'
import validate from './validate'


const TitleInput = componentProps => (
  <TextInput
    label="Post Title"
    componentProps={componentProps}
    type="text"
    placeholder="Title"
  />
)

const TextTextArea = componentProps => (
  <TextArea
    label="Description"
    componentProps={componentProps}
    type="text"
    placeholder="Description"
  />
)

const PostForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field name="id" component="input" type="hidden" />
    <Field name="title" component={TitleInput} type="text" />
    <Field name="text" component={TextTextArea} />
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
