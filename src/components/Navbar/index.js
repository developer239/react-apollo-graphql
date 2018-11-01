import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaQueries } from 'styles'
import Hamburger from './Hamburger'
import Link from '../Link'


export const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.color.primary};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  ${mediaQueries.lg} {
    flex-direction: row;
  }
`

export const Links = styled.div`
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  top: 60px;
  width: 100%;
    
  ${mediaQueries.lg} {
    display: flex;
    background-color: transparent;
    flex-direction: row;
  }
`

export const StyledLink = styled(Link)`
  display: block;
  color: ${props => props.theme.color.white};
  text-decoration: none;
  padding: 20px 15px;
  transition: background-color 150ms linear;
  font-size: 14px;
  background-color: ${props => props.isActive ? props.theme.color.secondary : 'transparent'};
  
  &:active,
  &:hover {
    background-color: ${props => props.theme.color.secondary};
  }
  
  ${mediaQueries.md} {
    font-size: 16px;
    padding: 20px 25px;
  }
`

const Navbar = ({ links, activeRoute }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleIsOpen = () => setIsOpen(!isOpen)

  return (
    <Container>
      <Content>
        <Links isOpen={isOpen}>
          {links.map(link => (
            <StyledLink
              onClick={handleToggleIsOpen}
              key={link.id}
              to={link.to}
              isActive={
                (activeRoute.startsWith(link.to) && link.to.length > 1)
                || link.to === activeRoute
              }
            >
              {link.label}
            </StyledLink>
          ))}
        </Links>
        <Hamburger isOpen={isOpen} toggleIsOpen={handleToggleIsOpen} />
      </Content>
    </Container>
  )
}

Navbar.propTypes = {
  activeRoute: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
}

export default Navbar
