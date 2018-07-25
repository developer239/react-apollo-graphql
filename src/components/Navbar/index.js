import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose, withState, withHandlers } from 'recompose'
import { mediaQueries } from 'styles'
import Hamburger from './Hamburger'
import Link from '../Link'


const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.color.primary};
`

const Content = styled.div`
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
  
  &:hover {
    background-color: ${props => props.theme.color.secondary};;
  }
  
  ${mediaQueries.md} {
    font-size: 16px;
    padding: 20px 25px;
  }
`

const Navbar = ({ isOpen, toggleOpen, links }) => (
  <Container>
    <Content>
      <Links isOpen={isOpen}>
        {links.map(link => <StyledLink key={link.id} to={link.to}>{link.label}</StyledLink>)}
      </Links>
      <Hamburger isOpen={isOpen} toggleIsOpen={toggleOpen} />
    </Content>
  </Container>
)

Navbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
}

const enhance = compose(
  withState('isOpen', 'setIsOpen', true),
  withHandlers({
    toggleOpen: ({ setIsOpen }) => () => setIsOpen(value => !value),
  }),
)

export default enhance(Navbar)
