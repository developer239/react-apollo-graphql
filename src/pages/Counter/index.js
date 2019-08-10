import React from 'react'
import { Section, Margin, Typography } from 'ui-react-library'
import { Query, ActionButton } from 'components'
import {
  COUNTER_VALUE,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  DOUBLE_COUNTER,
} from 'modules/counter/gql'

const { H2, P, A } = Typography

export const handleDoubleCounterComplete = ({ doubleCounterValueAsync }) => {
  // If you need to work with the counter value when the action is complete:
  // eslint-disable-next-line
  console.log('new value ', doubleCounterValueAsync.counterValue)
}

export const CounterPage = () => (
  <Section>
    <H2>Counter Page</H2>
    <P>
      It would make more sense to use react context in this case. However, to
      me, it seems like a simple increment/decrement counter is the easiest way
      to show what can{' '}
      <A href="https://github.com/apollographql/apollo-link-state">
        apollo-link-state
      </A>{' '}
      do.
    </P>
    <Query query={COUNTER_VALUE}>
      {({ data: { counterValue } }) => (
        <P>
          Counter value is: <strong>{counterValue}</strong>
        </P>
      )}
    </Query>
    <Margin isInline right={0.25}>
      <ActionButton
        type="primary"
        onButton
        mutation={INCREMENT_COUNTER}
        label="increment"
      />
    </Margin>
    <Margin isInline right={0.25}>
      <ActionButton
        type="primary"
        mutation={DECREMENT_COUNTER}
        label="decrement"
      />
    </Margin>
    <Margin isInline>
      <ActionButton
        mutation={DOUBLE_COUNTER}
        label="double (async)"
        onCompleted={handleDoubleCounterComplete}
      />
    </Margin>
  </Section>
)

export default CounterPage
