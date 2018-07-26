import React from 'react'
import { H2, P, A } from 'components/Typography'


const HomePage = () => (
  <section>
    <H2>React Redux Apollo Graphql</H2>
    <P>
      The third version of this minimal react apollo boilerplate. Originally this application was
      created a couple of years ago when I was learning GraphQl but couldn’t find many high-quality
      resources. The situation changed a lot since then but I am trying to keep this repository
      alive.
    </P>
    <P>
      If you want to learn graphql I highly recommend this website:
      <A href="https://www.howtographql.com"> https://www.howtographql.com</A>
    </P>
    <P>
      You can find the source code of this application
      <A href="https://github.com/developer239/react-redux-apollo-graphql"> here</A>
    </P>
  </section>
)

export default HomePage
