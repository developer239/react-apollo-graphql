import React from 'react'
import { H2, P } from 'components/Typography'
import { Query, ActionButton } from 'components'
import {
  COUNTER_VALUE,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  DOUBLE_COUNTER,
} from 'modules/counter/gql'


export const handleDoubleCounterComplete = ({ doubleCounterValueAsync }) => {
  // If you need to work with the counter value when the action is complete:
  console.log('new value ', doubleCounterValueAsync.counterValue)
}

export const CounterPage = () => (
  <section>
    <H2>Counter Page</H2>
    <P>
      Fusce nibh. Phasellus rhoncus. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum
      in, elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Aliquam erat volutpat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Nullam rhoncus aliquam metus. Curabitur sagittis hendrerit ante. Nullam faucibus mi
      quis velit.
    </P>
    <Query query={COUNTER_VALUE}>
      {({ data: { counterValue } }) => (
        <P>
          Current counter value is: <strong id="value">{counterValue}</strong>
        </P>
      )}
    </Query>
    <ActionButton mutation={INCREMENT_COUNTER} label="increment" />
    <ActionButton mutation={DECREMENT_COUNTER} label="decrement" />
    <ActionButton
      mutation={DOUBLE_COUNTER}
      label="double (async)"
      onCompleted={handleDoubleCounterComplete}
    />
  </section>
)

CounterPage.propTypes = {}

export default CounterPage
