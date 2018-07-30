import sinon from 'sinon'
import waitForExpect from 'wait-for-expect'
import { COUNTER_VALUE } from './gql'
import { mutations } from './clientState'


describe('Counter Client Mutations', () => {
  const DEFAULT_VALUE = 3
  const fakeReadQuery = sinon.fake.returns({ counterValue: DEFAULT_VALUE })
  const fakeWriteQuery = sinon.fake()
  const fakeCache = {
    readQuery: fakeReadQuery,
    writeQuery: fakeWriteQuery,
  }

  afterEach(() => {
    fakeReadQuery.resetHistory()
    fakeWriteQuery.resetHistory()
  })

  it('doubleCounterValueAsync works correctly', async () => {
    mutations.doubleCounterValueAsync(null, null, { cache: fakeCache })

    await waitForExpect(() => {
      expect(fakeReadQuery.calledWith({ query: COUNTER_VALUE })).toEqual(true)
      expect(fakeWriteQuery.calledWith({
        query: COUNTER_VALUE,
        data: { counterValue: DEFAULT_VALUE * 2 },
      })).toEqual(true)
    })
  })

  it('incrementCounterValue works correctly', () => {
    mutations.incrementCounterValue(null, null, { cache: fakeCache })
    expect(fakeReadQuery.calledWith({ query: COUNTER_VALUE })).toEqual(true)
    expect(fakeWriteQuery.calledWith({
      query: COUNTER_VALUE,
      data: { counterValue: DEFAULT_VALUE + 1 },
    })).toEqual(true)
  })

  it('decrementCounterValue works correctly', () => {
    mutations.decrementCounterValue(null, null, { cache: fakeCache })
    expect(fakeReadQuery.calledWith({ query: COUNTER_VALUE })).toEqual(true)
    expect(fakeWriteQuery.calledWith({
      query: COUNTER_VALUE,
      data: { counterValue: DEFAULT_VALUE - 1 },
    })).toEqual(true)
  })
})
