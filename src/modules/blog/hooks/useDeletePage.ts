import { useMutation } from '@apollo/react-hooks'
import {
  DeletePage,
  DeletePage_deletePage,
  DeletePageVariables,
} from '../gql/__generated__/DeletePage'
import { DELETE_PAGE_MUTATION } from '../gql'
import { updateListPages } from '../cache/updateListPages'

export const useDeletePage = () =>
  useMutation<DeletePage, DeletePageVariables>(DELETE_PAGE_MUTATION, {
    update: updateListPages<DeletePage_deletePage>(
      'deletePage',
      (listPages, deletePage) =>
        listPages.filter(page => page.id !== deletePage.id)
    ),
  })
