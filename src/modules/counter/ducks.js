export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const initialState = {
  value: 0,
}

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case INCREMENT_COUNTER: {
      return {
        value: state.value + 1,
      }
    }
    case DECREMENT_COUNTER: {
      return {
        value: state.value - 1,
      }
    }
    default:
      return state
  }
}

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
})
