import reducer, {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../index'


describe('counter reducer', () => {
  const mockInitialState = {
    value: 0,
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(mockInitialState)
  })

  it(`should handle ${INCREMENT_COUNTER}`, () => {
    const action = { type: INCREMENT_COUNTER }
    const updatedState = reducer(mockInitialState, action)

    expect(updatedState.value).toEqual(1)
  })

  it(`should handle ${DECREMENT_COUNTER}`, () => {
    const action = { type: DECREMENT_COUNTER }
    const updatedState = reducer(mockInitialState, action)

    expect(updatedState.value).toEqual(-1)
  })
})
