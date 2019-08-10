import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'react-bootstrap'


const Error = (props) => {
  console.log('props', props)
  return (
    <Grid>
      {props.message}
    </Grid>
  )
}

Error.propTypes = {
  message: PropTypes.string,
}

export default Error
