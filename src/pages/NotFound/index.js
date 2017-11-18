import React from 'react'
import { Link } from 'react-router-dom'


const NotFoundPage = () => (
  <section>
    <h2>Page Not Found :(</h2>
    <p>
      Please go back <Link to="/">home</Link>
    </p>
  </section>
)

export default NotFoundPage
