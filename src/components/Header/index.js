import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Navigation = props => (
  <ul>
    <li>
      <Link to="/">
        {props.title}
      </Link>
    </li>
    {props.links.map(item => (
      <li key={item.id}>
        <Link to={item.href}>{item.label}</Link>
      </li>
    ))}
  </ul>
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
