import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Label from '../Label'


const Input = ({
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
        <input
          id={id}
          value={values[id]}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors[id] && touched[id] && <div>{errors[id]}</div>}
      </Label>
    )}
  </Fragment>
)

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  id: '',
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
}

export default Input
