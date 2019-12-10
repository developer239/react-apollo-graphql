/* Tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ChangePasswordInput } from './../../../../globalTypes'

// ====================================================
// GraphQL mutation operation: ChangePassword
// ====================================================

export interface ChangePassword_changePassword {
  __typename: 'Session'
  accessToken: string
  refreshToken: string
}

export interface ChangePassword {
  changePassword: ChangePassword_changePassword | null
}

export interface ChangePasswordVariables {
  data: ChangePasswordInput
}
