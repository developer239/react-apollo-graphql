import { useMutation } from '@apollo/react-hooks'
import { CHANGE_PASSWORD_MUTATION } from '../gql'
import {
  ChangePassword,
  ChangePasswordVariables,
} from '../gql/__generated__/ChangePassword'

export const useChangePassword = () =>
  useMutation<ChangePassword, ChangePasswordVariables>(CHANGE_PASSWORD_MUTATION)
