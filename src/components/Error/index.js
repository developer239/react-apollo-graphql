import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'react-bootstrap'


const Error = ({ data }) => (
  <Grid>
    {data.error.message}
  </Grid>
)

Error.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
}

export default Error
