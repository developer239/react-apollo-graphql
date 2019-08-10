import { COUNTER_VALUE } from './gql'


export const initialState = {
  counterValue: 0,
}

export const mutations = {
  doubleCounterValueAsync: (_, __, { cache }) => {
    const { counterValue } = cache.readQuery({ query: COUNTER_VALUE })
    const data = { counterValue: counterValue * 2 }

    return new Promise(resolve => setTimeout(() => {
      cache.writeQuery({
        query: COUNTER_VALUE,
        data,
      })
      resolve(data)
    }, 1000))
  },
  incrementCounterValue: (_, __, { cache }) => {
    const { counterValue } = cache.readQuery({ query: COUNTER_VALUE })
    const data = { counterValue: counterValue + 1 }

    cache.writeQuery({
      query: COUNTER_VALUE,
      data,
    })

    return data
  },
  decrementCounterValue: (_, __, { cache }) => {
    const { counterValue } = cache.readQuery({ query: COUNTER_VALUE })
    const data = { counterValue: counterValue - 1 }

    cache.writeQuery({
      query: COUNTER_VALUE,
      data,
    })

    return data
  },
}
