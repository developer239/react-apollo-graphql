import React from 'react'
import { Grid, Alert } from 'react-bootstrap'


const LoadingError = () => (
  <Grid>
    <Alert bsStyle="danger">
      <strong>Error!</strong> Fetching data from GraphQl server was not successful.
    </Alert>
  </Grid>
)

export default LoadingError
