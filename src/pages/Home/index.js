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
      This is yet another react boilerplate. I created first version 9 months ago because it was
      hard to find up-to-date react, redux and apollo implementation. I made a lot of major updates.
      I hope this repo will save you some time while learning apollo graphql.
    </p>
    <h4>Major Updates</h4>
    <h5>Dependencies:</h5>
    <ul>
      <li>functional programming with Recompose 0.26.0</li>
      <li>Apollo 2.0.2</li>
      <li>React 16.1.0</li>
      <li>Webpack 3.8.1</li>
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
