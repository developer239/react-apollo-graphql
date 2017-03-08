import React from 'react'
import { Link } from 'react-router'
import { Grid } from 'react-bootstrap'


const NotFound = () => (
  <Grid>
    <h2>Page not found</h2>
    <Link to="/">
      <span className="glyphicon glyphicon-home" /> Go back home
    </Link>
  </Grid>
)

export default NotFound
