import gql from 'graphql-tag'

export const LIST_PAGES_QUERY = gql`
  query ListPages {
    listPages {
      id
      title
    }
  }
`
