import waitForExpect from 'wait-for-expect'
import { COUNTER_VALUE } from './gql'
import { mutations } from './clientState'

describe('Counter Client Mutations', () => {
  const DEFAULT_VALUE = 3
  const fakeReadQuery = jest.fn(() => ({ counterValue: DEFAULT_VALUE }))
  const fakeWriteQuery = jest.fn()
  const fakeCache = {
    readQuery: fakeReadQuery,
    writeQuery: fakeWriteQuery,
  }

  afterEach(() => {
    fakeReadQuery.mockClear()
    fakeWriteQuery.mockClear()
  })

  it('doubleCounterValueAsync works correctly', async () => {
    mutations.doubleCounterValueAsync(null, null, { cache: fakeCache })

    await waitForExpect(() => {
      expect(fakeReadQuery).toBeCalledWith({ query: COUNTER_VALUE })
      expect(fakeWriteQuery).toBeCalledWith({
        query: COUNTER_VALUE,
        data: { counterValue: DEFAULT_VALUE * 2 },
      })
    })
  })

  it('incrementCounterValue works correctly', () => {
    mutations.incrementCounterValue(null, null, { cache: fakeCache })
    expect(fakeReadQuery).toBeCalledWith({ query: COUNTER_VALUE })
    expect(fakeWriteQuery).toBeCalledWith({
      query: COUNTER_VALUE,
      data: { counterValue: DEFAULT_VALUE + 1 },
    })
  })

  it('decrementCounterValue works correctly', () => {
    mutations.decrementCounterValue(null, null, { cache: fakeCache })
    expect(fakeReadQuery).toBeCalledWith({ query: COUNTER_VALUE })
    expect(fakeWriteQuery).toBeCalledWith({
      query: COUNTER_VALUE,
      data: { counterValue: DEFAULT_VALUE - 1 },
    })
  })
})
