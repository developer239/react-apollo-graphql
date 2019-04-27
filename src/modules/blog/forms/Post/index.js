import React from 'react'
import PropTypes from 'prop-types'
import { Button, Input, Textarea, Margin } from 'ui-react-library'
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
      name="title"
      label="Title"
      placeholder="New Post Title"
      value={values.title}
      error={touched.title && errors.title}
      touched={touched.title}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <Margin top={2}>
      <Textarea
        id="text"
        name="text"
        label="Text"
        placeholder="New Post Text"
        value={values.text}
        touched={touched.text}
        error={touched.text && errors.text}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Margin>
    <Margin top={3}>
      <Button>Submit</Button>
    </Margin>
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
