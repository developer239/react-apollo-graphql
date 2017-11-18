import React from 'react'
import styled from 'styled-components'
import { Grid, PageHeader } from 'react-bootstrap'
import DummyImage from './dummy.png'


const StyledImage = styled.img`
  width: 100%;
  max-width: 128rem;
`

const HomePage = () => (
  <Grid>
    <PageHeader>React Redux Apollo GraphQL Hot Boilerplate 2.0</PageHeader>
    <p>
      Updated version of the old apollo graphql boilerplate. This one is cleaner and functional. I
      used boilerplate code from my
      <a href="https://github.com/developer239/workbox-webpack-react"> workbox-webpack-react </a>
      but I got rid of the PWA aspects
      because
      progressive websites are little bit confusing for new developers.
    </p>
    <p>
      You can find the source code
      <a href="https://github.com/developer239/ReactReduxApolloGraphQLHotBoilerplate"> here</a>.
    </p>
    <h4>Major Updates</h4>
    <h5>Dependencies:</h5>
    <ul>
      <li>functional programming with Recompose 0.26.0</li>
      <li>React Apollo 2.0.2</li>
      <li>React 16.1.0</li>
      <li>React Router 4.2.2</li>
      <li>Redux 3.7.2</li>
      <li>Webpack 3.8.1</li>
      <li>Styled Components 2.2.3</li>
    </ul>
    <h5>Scripts:</h5>
    <ul>
      <li><i>prod</i> runs on express and is heroku ready</li>
      <li><i>dev</i> also runs on express and is heroku ready</li>
    </ul>
    <StyledImage src={DummyImage} alt="dummy" />
  </Grid>
)

export default HomePage
