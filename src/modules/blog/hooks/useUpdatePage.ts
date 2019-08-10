import { useMutation } from '@apollo/react-hooks'
import {
  UpdatePage,
  UpdatePageVariables,
} from '../gql/__generated__/UpdatePage'
import { UPDATE_PAGE_MUTATION } from '../gql'

export const useUpdatePage = () =>
  useMutation<UpdatePage, UpdatePageVariables>(UPDATE_PAGE_MUTATION)
