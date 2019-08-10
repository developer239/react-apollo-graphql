import { useMutation } from '@apollo/react-hooks'
import { LOGIN_MUTATION } from '../gql'
import { Login, LoginVariables } from '../gql/__generated__/Login'

export const useLogin = () => useMutation<Login, LoginVariables>(LOGIN_MUTATION)
