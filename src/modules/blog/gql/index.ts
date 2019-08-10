import gql from 'graphql-tag'

export const LIST_PAGES_QUERY = gql`
  query ListPages {
    listPages {
      id
      title
      text
    }
  }
`

export const PAGE_DETAIL_QUERY = gql`
  query PageDetail($id: Float!) {
    pageDetail(id: $id) {
      id
      title
      text
      user {
        id
        email
        pages {
          id
          title
        }
      }
    }
  }
`

export const CREATE_PAGE_MUTATION = gql`
  mutation CreatePage($data: CreatePageInput!) {
    createPage(data: $data) {
      id
      title
      text
    }
  }
`

export const UPDATE_PAGE_MUTATION = gql`
  mutation UpdatePage($data: UpdatePageInput!) {
    updatePage(data: $data) {
      id
      title
      text
    }
  }
`

export const DELETE_PAGE_MUTATION = gql`
  mutation DeletePage($id: Float!) {
    deletePage(id: $id) {
      id
      title
      text
    }
  }
`
