import React from 'react'
import PropTypes from 'prop-types'
import Navigation from 'components/layout/Navigation'
import styles from './styles.scss'


const App = props => (
  <div className={styles.base}>
    <Navigation
      title="Boilerplate"
      links={[
        {
          id: 1,
          label: 'Counter',
          href: '/counter',
        },
        {
          id: 2,
          label: 'Posts',
          href: '/posts',
        },
        {
          id: 3,
          label: 'About',
          href: '/about',
        },
      ]}
    />
    { props.children }
  </div>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default App
