import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Typography } from 'ui-react-library'

const { H2, P } = Typography

export const NOT_FOUND_TEST_ID = 'page-not-found'

const NotFoundPage = () => (
  <Section data-testid={NOT_FOUND_TEST_ID}>
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
