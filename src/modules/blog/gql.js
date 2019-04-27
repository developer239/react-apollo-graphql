import gql from 'graphql-tag'

export const ALL_POSTS = gql`
  query allPosts {
    allPosts(orderBy: createdAt_DESC) {
      id
      title
      text
    }
  }
`

export const POST_DETAIL = gql`
  query PostDetail($id: ID!) {
    Post(id: $id) {
      id
      title
      text
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost($title: String!, $text: String!) {
    createPost(title: $title, text: $text) {
      id
      title
      text
    }
  }
`

export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $text: String!) {
    updatePost(id: $id, title: $title, text: $text) {
      id
      title
      text
    }
  }
`

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`
