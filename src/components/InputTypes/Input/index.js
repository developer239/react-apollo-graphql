import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Label from '../Label'
import ErrorText from '../ErrorText'


const StyledInput = styled.input`
  padding: 10px 10px;
  border: 1px solid ${props => props.theme.color.lightGrey};
  margin-top: 10px;
`

const Input = ({
  id,
  label,
  values,
  touched,
  errors,
  type,
  placeholder,
  handleChange,
  handleBlur,
}) => (
  <Fragment>
    {label && (
      <Label htmlFor={id}>
        {label}
        <StyledInput
          id={id}
          name={id}
          value={values[id]}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors[id] && touched[id] && <ErrorText>{errors[id]}</ErrorText>}
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
