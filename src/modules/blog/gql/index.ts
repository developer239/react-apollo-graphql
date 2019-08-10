import { gql } from 'apollo-boost'

export const LIST_PAGES_QUERY = gql`
  query ListPages {
    listPages {
      id
      title
    }
  }
`
