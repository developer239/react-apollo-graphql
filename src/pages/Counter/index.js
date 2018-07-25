import React from 'react'
import { H2, P } from 'components/Typography'
import { Button } from 'components'


export const CounterPage = () => (
  <div>
    <H2>Counter Page</H2>
    <P>
      Fusce nibh. Phasellus rhoncus. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum
      in, elit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Aliquam erat volutpat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Nullam rhoncus aliquam metus. Curabitur sagittis hendrerit ante. Nullam faucibus mi
      quis velit.
    </P>
    <P>
      Current counter value is: <strong id="value">123</strong>
    </P>
    <Button>increment</Button>
    <Button>decrement</Button>
  </div>
)

CounterPage.propTypes = {}

export default CounterPage
