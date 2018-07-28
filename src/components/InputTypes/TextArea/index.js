import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Label from '../Label'
import ErrorText from '../ErrorText'


const StyledTextArea = styled.textarea`
  padding: 10px 10px;
  border: 1px solid ${props => props.theme.color.lightGrey};
  margin-top: 10px;
  width: 400px;
  height: 200px;
  background-color: transparent;
`

const TextArea = ({
  id,
  label,
  values,
  touched,
  errors,
  placeholder,
  handleChange,
  handleBlur,
}) => (
  <Fragment>
    {label && (
      <Label htmlFor={id}>
        {label}
        <StyledTextArea
          id={id}
          name={id}
          value={values[id]}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors[id] && touched[id] && <ErrorText>{errors[id]}</ErrorText>}
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
