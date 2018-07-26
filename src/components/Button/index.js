import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export const getButtonColor = ({ type, theme: { color } }) => {
  switch (type) {
    case 'success':
      return {
        background: color.lightGreen,
        hover: color.darkGreen,
      }
    case 'error':
      return {
        background: color.lightRed,
        hover: color.darkRed,
      }
    default:
      return {
        background: color.lightGrey,
        hover: color.darkGrey,
      }
  }
}

const StyledButton = styled.button`
  background-color: ${props => getButtonColor(props).background};
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 150ms linear;
  
  &:hover {
    background-color: ${props => getButtonColor(props).hover};
  }
  
  &:focus {
    outline: 0;
  }
  
  &:active {
    background-color: ${({ type, theme: { color } }) => type ? color.lightGrey : color.primary};
  }
`

const Button = ({ type, children, ...rest }) => (
  <StyledButton {...rest} type={type}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  type: null,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
}

export default Button
