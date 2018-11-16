import React from 'react'
import { Link } from 'react-router-dom'
import { Section, Typography } from '@michal.jarnot/ui-components'


const { H2, P, A } = Typography

const NotFoundPage = () => (
  <Section>
    <H2>Page Not Found :(</H2>
    <P>
      Please go back <A to="/" as={Link}>home</A>
    </P>
  </Section>
)

export default NotFoundPage
