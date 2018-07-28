import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export const getButtonColor = ({ bgType, theme: { color } }) => {
  switch (bgType) {
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

export const StyledButton = styled.button`
  background-color: ${props => getButtonColor(props).background};
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 150ms linear;
  margin-right: 2px;
  
  &:hover {
    background-color: ${props => getButtonColor(props).hover};
  }
  
  &:focus {
    outline: 0;
  }
  
  &:active {
    background-color: ${({ bgType, theme: { color } }) => bgType ? color.lightGrey : color.primary};
  }
`

const Button = ({ bgType, children, ...rest }) => (
  <StyledButton bgType={bgType} {...rest}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  bgType: null,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgType: PropTypes.oneOf(['success', 'error']),
}

export default Button
