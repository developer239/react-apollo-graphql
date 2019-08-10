/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_pages {
  __typename: 'Page'
  id: string
  title: string
  text: string
}

export interface Me_me {
  __typename: 'User'
  id: string
  email: string
  firstName: string
  lastName: string
  pages: Me_me_pages[] | null
}

export interface Me {
  me: Me_me | null
}
