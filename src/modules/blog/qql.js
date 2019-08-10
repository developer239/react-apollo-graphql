import gql from 'graphql-tag'


export const queryAllPosts = gql`query allPosts{
  allPosts{
    id
    title
    text
  }
}
`

export const queryPostDetail = gql`query PostDetail($id: ID!){
  Post(id: $id){
    id
    title
    text
  }
}
`

export const createPost = gql`
  mutation createPost($title: String!, $text: String!) {
    createPost(title: $title, text: $text) {
      id
      title
      text
    }
  }
`

export const updatePost = gql`
  mutation updatePost($id: ID!, $title: String!, $text: String!) {
    updatePost(id: $id, title: $title, text: $text) {
      id
      title
      text
    }
  }
`

export const deletePost = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`
