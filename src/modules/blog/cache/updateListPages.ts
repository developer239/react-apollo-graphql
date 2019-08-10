import { DataProxy } from 'apollo-cache'
import { ListPages } from '../gql/__generated__/ListPages'
import { LIST_PAGES_QUERY } from '../gql'

export const updateListPages = <T>(
  queryName: string,
  callBack: (
    listPages: ListPages['listPages'],
    result: T
  ) => ListPages['listPages']
) => (cache: DataProxy, params: any) => {
  const result = params.data[queryName]

  const { listPages } = cache.readQuery<ListPages>({
    query: LIST_PAGES_QUERY,
  })
  cache.writeQuery({
    query: LIST_PAGES_QUERY,
    data: { listPages: callBack(listPages, result) },
  })
}
