import React from 'react'
import PropTypes from 'prop-types'
import { Button, Input } from '@michal.jarnot/ui-components'
import { withFormik } from 'formik'
import * as Yup from 'yup'


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
      value={values.title}
      touched={touched.title}
      errors={errors.title}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <textarea
      id="text"
      placeholder="New Post Text"
      value={values.text}
      touched={touched.text}
      errors={errors.text}
      onChange={handleChange}
      onBlur={handleBlur}
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
