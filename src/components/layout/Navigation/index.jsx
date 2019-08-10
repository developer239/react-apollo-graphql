import React from 'react'
import { Link } from 'react-router'
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
        {props.links.map(item =>
          <LinkContainer key={item.id} to={item.href}>
            <NavItem>{item.label}</NavItem>
          </LinkContainer>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Navigation.propTypes = {
  title: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      href: React.PropTypes.string.isRequired,
      label: React.PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Navigation
