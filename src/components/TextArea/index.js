import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'


const StyledFormControl = styled(FormControl)`
  min-height: 15rem;
`

const TextArea = ({ className, id, input, meta, label, placeholder, type }) => {
  const hasInvalidState = meta.invalid && meta.touched

  return (
    <FormGroup className={className} validationState={hasInvalidState ? 'error' : null}>
      {!!label && <ControlLabel htmlFor={id}>{label}:</ControlLabel>}
      <StyledFormControl
        componentClass="textarea"
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        type={type}
        placeholder={placeholder}
        id={id}
      />
      {hasInvalidState && <HelpBlock>{meta.error}</HelpBlock>}
    </FormGroup>
  )
}

TextArea.defaultProps = {
  type: 'text',
  placeholder: '',
}

TextArea.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
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

export default TextArea
