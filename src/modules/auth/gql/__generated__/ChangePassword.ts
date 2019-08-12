/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ChangePasswordInput } from './../../../../../__generated__/globalTypes'

// ====================================================
// GraphQL mutation operation: ChangePassword
// ====================================================

export interface ChangePassword_changePassword {
  __typename: 'Session'
  accessToken: string
}

export interface ChangePassword {
  changePassword: ChangePassword_changePassword | null
}

export interface ChangePasswordVariables {
  data: ChangePasswordInput
}
