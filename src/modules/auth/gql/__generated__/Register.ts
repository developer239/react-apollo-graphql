/* Tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RegisterInput } from './../../../../globalTypes'

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_register {
  __typename: 'Session'
  accessToken: string
  refreshToken: string
}

export interface Register {
  register: Register_register
}

export interface RegisterVariables {
  data: RegisterInput
}
