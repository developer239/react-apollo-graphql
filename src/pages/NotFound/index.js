import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Typography } from 'ui-react-library'

const { H2, P } = Typography

const NotFoundPage = () => (
  <Section data-testid="page-not-found">
    <H2>Page Not Found :(</H2>
    <P>
      Please go back{' '}
      <Link to="/" as={Link}>
        home
      </Link>
    </P>
  </Section>
)

export default NotFoundPage
