import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { mediaQueries } from 'styles'


export const Hamburger = styled.div`
  align-self: flex-end;
  margin: 14px;
  width: 2rem;
  height: 2rem;
  transform: rotate(0deg);
  transition: 0.25s ease;
  cursor: pointer;
  display: block;
  
  span:nth-child(1) {
    top: 0;
  }
  
  span:nth-child(2),
  span:nth-child(3) {
    top: 0.6rem;
  }
  
  span:nth-child(4) {
    top: 1.2rem;
  }
  
  ${({ isOpen }) => isOpen && css`
    span:nth-child(1) {
      top: 0.8rem;
      width: 0%;
      left: 50%;
    }
    
    span:nth-child(2) {
      transform: rotate(45deg);
    }
    
    span:nth-child(3) {
      transform: rotate(-45deg);
    }
    
    span:nth-child(4) {
      top: 0.8rem;
      width: 0%;
      left: 50%;
    }
  `};
  
  ${mediaQueries.lg} {
    display: none;
  }
`

export const HamburgerLine = styled.span`
  display: block;
  position: absolute;
  border-radius: 1.6rem;
  height: 0.2rem;
  width: 100%;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  background: ${props => props.theme.color.white};
  
  ${mediaQueries.md} {
    background: ${props => props.theme.color.white};
  }
`

const HamburgerComponent = ({ isOpen, toggleIsOpen }) => (
  <Hamburger isOpen={isOpen} onClick={toggleIsOpen}>
    <HamburgerLine isOpen={isOpen} />
    <HamburgerLine isOpen={isOpen} />
    <HamburgerLine isOpen={isOpen} />
    <HamburgerLine isOpen={isOpen} />
  </Hamburger>
)

HamburgerComponent.propTypes = {
  toggleIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default HamburgerComponent
