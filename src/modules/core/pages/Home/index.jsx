import React from 'react'
import { Jumbotron, Grid } from 'react-bootstrap'
import exampleImagePath from './example-image.png'


const Home = () => (
  <Grid>
    <Jumbotron>
      <h1>Boilerplate</h1>
    </Jumbotron>
    <img style={{ width: '100%' }} role="presentation" src={exampleImagePath} />
  </Grid>
)

export default Home
