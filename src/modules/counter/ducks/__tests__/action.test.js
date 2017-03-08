import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  incrementCounter,
  decrementCounter,
} from '../index'


describe('counter actions', () => {
  it('should dispatch increment counter', () => {
    const action = incrementCounter()
    expect(action).toEqual({
      type: INCREMENT_COUNTER,
    })
  })

  it('should dispatch decrement counter', () => {
    const action = decrementCounter()
    expect(action).toEqual({
      type: DECREMENT_COUNTER,
    })
  })
})
