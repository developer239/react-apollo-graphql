import { useMutation } from '@apollo/react-hooks'
import { ListPages } from '../gql/__generated__/ListPages'
import {
  CreatePage,
  CreatePageVariables,
} from '../gql/__generated__/CreatePage'
import { CREATE_PAGE_MUTATION, LIST_PAGES_QUERY } from '../gql'

export const useCreatePage = () =>
  useMutation<CreatePage, CreatePageVariables>(CREATE_PAGE_MUTATION, {
    update(cache, { data: { createPage: newPage } }) {
      const { listPages } = cache.readQuery<ListPages>({
        query: LIST_PAGES_QUERY,
      })
      cache.writeQuery({
        query: LIST_PAGES_QUERY,
        data: { listPages: listPages.concat([newPage]) },
      })
    },
  })
