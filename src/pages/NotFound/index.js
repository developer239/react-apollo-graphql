import React from 'react'
import { H2, P } from 'components/Typography'
import { Link } from 'components'


const NotFoundPage = () => (
  <section>
    <H2>Page Not Found :(</H2>
    <P>
      Please go back <Link to="/">home</Link>
    </P>
  </section>
)

export default NotFoundPage
