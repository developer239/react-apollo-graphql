import React from 'react'
import PropTypes from 'prop-types'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { Input, TextArea } from 'components/InputTypes'
import { Button } from 'components'


const PostForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <Input
      id="title"
      label="Title"
      placeholder="New Post Title"
      values={values}
      touched={touched}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
    />
    <TextArea
      id="text"
      label="Text"
      placeholder="New Post Text"
      values={values}
      touched={touched}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
    />
    <Button type="submit">Submit</Button>
  </form>
)

PostForm.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const EnhancedForm = withFormik({
  mapPropsToValues: props => {
    if (!props.initialValues) {
      return { title: '', text: '' }
    }
    return { title: props.initialValues.title, text: props.initialValues.text }
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required'),
    text: Yup.string().required('Text is required'),
  }),
  handleSubmit: (values, other) => {
    other.props.submit({
      ...values,
      id: other.props.initialValues && other.props.initialValues.id,
    })
  },
  displayName: 'PostForm',
})(PostForm)

export default EnhancedForm
