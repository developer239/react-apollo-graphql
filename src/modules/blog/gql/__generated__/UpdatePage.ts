/* Tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UpdatePageInput } from './../../../../globalTypes'

// ====================================================
// GraphQL mutation operation: UpdatePage
// ====================================================

export interface UpdatePage_updatePage {
  __typename: 'Page'
  id: string
  title: string
  text: string
}

export interface UpdatePage {
  updatePage: UpdatePage_updatePage
}

export interface UpdatePageVariables {
  data: UpdatePageInput
}
