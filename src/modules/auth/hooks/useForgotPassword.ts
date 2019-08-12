import { useMutation } from '@apollo/react-hooks'
import { FORGOT_PASSWORD_MUTATION } from '../gql'
import {
  ForgotPassword,
  ForgotPasswordVariables,
} from '../gql/__generated__/ForgotPassword'

export const useForgotPassword = () =>
  useMutation<ForgotPassword, ForgotPasswordVariables>(FORGOT_PASSWORD_MUTATION)
