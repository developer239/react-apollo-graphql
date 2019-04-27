import {
  COUNTER_VALUE,
  DECREMENT_COUNTER,
  DOUBLE_COUNTER,
  INCREMENT_COUNTER,
} from '../../src/modules/counter/gql'

export const fakeDefaultCounterValue = {
  request: {
    query: COUNTER_VALUE,
  },
  result: { data: { counterValue: 2 } },
}

export const fakeDecrementCounterResponse = {
  request: {
    query: DECREMENT_COUNTER,
  },
  result: { data: { counterValue: 1 } },
}

export const fakeIncrementCounterResponse = {
  request: {
    query: INCREMENT_COUNTER,
  },
  result: { data: { counterValue: 3 } },
}

export const fakeDoubleCounterValue = {
  request: {
    query: DOUBLE_COUNTER,
  },
  result: { data: { counterValue: 4 } },
}
