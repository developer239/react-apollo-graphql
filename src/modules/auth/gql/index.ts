import gql from 'graphql-tag'

export const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      firstName
      lastName
      pages {
        id
        title
        text
      }
    }
  }
`

export const REGISTER_MUTATION = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      accessToken
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`
