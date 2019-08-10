import { gql } from 'apollo-boost'

export const QUERY = gql`
  query ListPages {
    listPages {
      id
      title
    }
  }
`
