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
      refreshToken
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`

export const FORGOT_PASSWORD_MUTATION = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`

export const CHANGE_PASSWORD_MUTATION = gql`
  mutation ChangePassword($data: ChangePasswordInput!) {
    changePassword(data: $data) {
      accessToken
      refreshToken
    }
  }
`

export const ACCESS_TOKEN_QUERY = gql`
  query AccessToken($refreshToken: String!) {
    accessToken(refreshToken: $refreshToken)
  }
`
