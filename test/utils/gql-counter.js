import { COUNTER_VALUE } from '../../src/modules/counter/gql'

export const fakeDefaultCounterValue = {
  request: {
    query: COUNTER_VALUE,
  },
  result: { data: { counterValue: 2 } },
}
