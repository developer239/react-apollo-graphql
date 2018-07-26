import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Label from '../Label'


const TextArea = ({
  id,
  label,
  values,
  touched,
  errors,
  type,
  placeholder,
  handleChange,
  handleBlur
}) => (
  <Fragment>
    {label && (
      <Label htmlFor={id}>
        {label}
        <textarea
          id={id}
          value={values[id]}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors[id] && touched[id] && <div>{errors[id]}</div>}
      </Label>
    )}
  </Fragment>
)

TextArea.defaultProps = {
  placeholder: '',
  label: '',
  id: '',
}

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
}

export default TextArea
