import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'react-bootstrap'


const NoData = ({ message }) => (
  <Grid>
    {message}
  </Grid>
)

NoData.propTypes = {
  message: PropTypes.string.isRequired,
}

export default NoData
