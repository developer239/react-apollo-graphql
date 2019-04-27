import gql from 'graphql-tag'

export const COUNTER_VALUE = gql`
  query {
    counterValue @client
  }
`

export const INCREMENT_COUNTER = gql`
  mutation {
    incrementCounterValue @client
  }
`

export const DECREMENT_COUNTER = gql`
  mutation {
    decrementCounterValue @client
  }
`

export const DOUBLE_COUNTER = gql`
  mutation {
    doubleCounterValueAsync @client
  }
`
