import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'


export const Link = ({ children, ...rest }) => (
  <RouterLink {...rest}>
    {children}
  </RouterLink>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Link
