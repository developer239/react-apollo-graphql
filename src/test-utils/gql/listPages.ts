import { LIST_PAGES_QUERY } from 'modules/blog/gql'
import { MockPageType } from '../generators'

export const LIST_PAGES_ERROR_MESSAGE = 'list pages failed'

export const mockListPagesSuccess = (data: MockPageType[]) => ({
  request: {
    query: LIST_PAGES_QUERY,
  },
  result: {
    data: {
      listPages: data,
    },
  },
})

export const mockListPagesError = {
  request: {
    query: LIST_PAGES_QUERY,
  },
  error: new Error(LIST_PAGES_ERROR_MESSAGE),
}
