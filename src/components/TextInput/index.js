import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'


const TextInput = ({ className, id, input, meta, label, placeholder, type }) => {
  const hasInvalidState = meta.invalid && meta.touched

  return (
    <FormGroup className={className} validationState={hasInvalidState ? 'error' : null}>
      {!!label && <ControlLabel htmlFor={id}>{label}:</ControlLabel>}
      <FormControl
        value={input.value}
        onChange={input.onChange}
        type={type}
        placeholder={placeholder}
        id={id}
        onBlur={input.onBlur}
      />
      {hasInvalidState && <HelpBlock>{meta.error}</HelpBlock>}
    </FormGroup>
  )
}

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
}

TextInput.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    dirty: PropTypes.bool,
    invalid: PropTypes.bool,
  }),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
}

export default TextInput
