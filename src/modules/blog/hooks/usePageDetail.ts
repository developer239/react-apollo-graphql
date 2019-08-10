import { useQuery } from '@apollo/react-hooks'
import {
  PageDetail,
  PageDetailVariables,
} from '../gql/__generated__/PageDetail'
import { PAGE_DETAIL_QUERY } from '../gql'

export const usePageDetail = ({ pageId }: { pageId: number }) =>
  useQuery<PageDetail, PageDetailVariables>(PAGE_DETAIL_QUERY, {
    variables: { id: pageId },
  })
