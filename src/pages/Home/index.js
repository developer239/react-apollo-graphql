/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Section, Typography } from 'ui-react-library'

const { H2, P, A } = Typography

const HomePage = () => (
  <Section>
    <H2>React Apollo GraphQl</H2>
    <P>
      The third version of minimal react apollo boilerplate. I was learning
      GraphQl several years ago. However, I couldn't find many react-apollo
      examples. The situation changed a lot since then, but I am trying to keep
      this repository alive. There is never enough of simple examples. I hope
      this one will make learning Apollo and GraphQl easier for you.
    </P>
    <P>
      Link to github repository{' '}
      <A href="https://github.com/developer239/react-redux-apollo-graphql">
        is here
      </A>
      .
    </P>
  </Section>
)

export default HomePage
