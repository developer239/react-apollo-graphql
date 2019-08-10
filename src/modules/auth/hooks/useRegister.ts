import { useMutation } from '@apollo/react-hooks'
import { Register, RegisterVariables } from '../gql/__generated__/Register'
import { REGISTER_MUTATION } from '../gql'

export const useRegister = () =>
  useMutation<Register, RegisterVariables>(REGISTER_MUTATION)
