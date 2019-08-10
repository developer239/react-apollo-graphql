import { useMutation } from '@apollo/react-hooks'
import {
  DeletePage,
  DeletePageVariables,
} from '../gql/__generated__/DeletePage'
import { DELETE_PAGE_MUTATION, LIST_PAGES_QUERY } from '../gql'
import { ListPages } from '../gql/__generated__/ListPages'

export const useDeletePage = () =>
  useMutation<DeletePage, DeletePageVariables>(DELETE_PAGE_MUTATION, {
    update(cache, { data: { deletePage: deletedPage } }) {
      const { listPages } = cache.readQuery<ListPages>({
        query: LIST_PAGES_QUERY,
      })
      cache.writeQuery({
        query: LIST_PAGES_QUERY,
        data: {
          listPages: listPages.filter(page => page.id !== deletedPage.id),
        },
      })
    },
  })
