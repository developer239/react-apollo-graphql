/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PageDetail
// ====================================================

export interface PageDetail_pageDetail_user_pages {
  __typename: 'Page'
  id: string
  title: string
  text: string
}

export interface PageDetail_pageDetail_user {
  __typename: 'User'
  id: string
  email: string
  pages: PageDetail_pageDetail_user_pages[] | null
}

export interface PageDetail_pageDetail {
  __typename: 'Page'
  id: string
  title: string
  text: string
  user: PageDetail_pageDetail_user
}

export interface PageDetail {
  pageDetail: PageDetail_pageDetail
}

export interface PageDetailVariables {
  id: number
}
