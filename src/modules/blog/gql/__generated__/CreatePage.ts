/* Tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreatePageInput } from './../../../../globalTypes'

// ====================================================
// GraphQL mutation operation: CreatePage
// ====================================================

export interface CreatePage_createPage {
  __typename: 'Page'
  id: string
  title: string
  text: string
}

export interface CreatePage {
  createPage: CreatePage_createPage
}

export interface CreatePageVariables {
  data: CreatePageInput
}
