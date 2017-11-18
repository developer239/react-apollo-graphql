import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledButton = styled(Button)`
  margin-right: 0.5rem;
`

const ButtonComponent = ({ children, bsStyle, ...rest }) => (
  <StyledButton {...rest} bsStyle={bsStyle}>
    {children}
  </StyledButton>
)

ButtonComponent.defaultProps = {
  bsStyle: 'default',
}

ButtonComponent.propTypes = {
  children: PropTypes.node,
  bsStyle: PropTypes.string,
}

export default ButtonComponent
