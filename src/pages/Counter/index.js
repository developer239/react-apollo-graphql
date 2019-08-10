import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, PageHeader } from 'react-bootstrap'
import { incrementCounter, decrementCounter } from 'modules/counter/ducks'
import { selectCounterValue } from 'modules/counter/selectors'
import { Button } from 'components'


export const CounterPage = ({ increment, decrement, counterValue }) => (
  <Grid>
    <PageHeader>Redux Counter</PageHeader>
    <p>
      Current counter value is: <strong id="value">{counterValue}</strong>
    </p>
    <Button id="increment" onClick={increment}>Increment</Button>
    <Button id="decrement" onClick={decrement}>Decrement</Button>
  </Grid>
)

CounterPage.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counterValue: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  counterValue: selectCounterValue(state),
})

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterPage)
