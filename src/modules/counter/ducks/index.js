export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const initialState = {
  value: 0,
}

export default (state, action) => {
  const { type } = action

  if (state === undefined) {
    return initialState
  }

  if (type === INCREMENT_COUNTER) {
    return {
      value: state.value + 1,
    }
  }

  if (type === DECREMENT_COUNTER) {
    return {
      value: state.value - 1,
    }
  }

  return state
}

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
})
