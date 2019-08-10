import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'


const Navigation = props => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          {props.title}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {props.links.map(item => (
          <LinkContainer key={item.id} to={item.href}>
            <NavItem>{item.label}</NavItem>
          </LinkContainer>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Navigation
