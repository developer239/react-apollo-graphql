import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { useMutation, useQuery } from '@apollo/react-hooks'
import {
  DELETE_PAGE_MUTATION,
  LIST_PAGES_QUERY,
  PAGE_DETAIL_QUERY,
} from '../../../modules/blog/gql'
import {
  PageDetail,
  PageDetailVariables,
} from '../../../modules/blog/gql/__generated__/PageDetail'
import { Loader } from '../../../components/Loader'
import { ErrorComponent } from '../../../components/Error'
import { Me } from '../../../modules/auth/gql/__generated__/Me'
import { ME_QUERY } from '../../../modules/auth/gql'
import { Link } from 'react-router-dom'
import {
  DeletePage,
  DeletePageVariables,
} from '../../../modules/blog/gql/__generated__/DeletePage'
import { ListPages } from '../../../modules/blog/gql/__generated__/ListPages'

export const DetailPage: FC<
  RouteComponentProps<{ pageId: string }>
> = props => {
  const pageId = Number(props.match.params.pageId)
  const { data, loading, error } = useQuery<PageDetail, PageDetailVariables>(
    PAGE_DETAIL_QUERY,
    { variables: { id: pageId } }
  )
  const { data: userData, loading: isLoadingUser } = useQuery<Me>(ME_QUERY)
  const [deletePage, { loading: isDeleting }] = useMutation<
    DeletePage,
    DeletePageVariables
  >(DELETE_PAGE_MUTATION, {
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

  if (loading || isLoadingUser) {
    return <Loader />
  }

  if (error) {
    return <ErrorComponent>{error.message}</ErrorComponent>
  }

  const moreFromTheAuthor = data.pageDetail.user.pages.filter(
    page => page.id !== String(pageId)
  )

  const handleDeletePage = async () => {
    await deletePage({ variables: { id: Number(data.pageDetail.id) } })
    props.history.push('/')
  }

  return (
    <div>
      <h1>{data.pageDetail.title}</h1>
      <p>{data.pageDetail.text}</p>
      {Boolean(moreFromTheAuthor.length) && (
        <div>
          <h4>More from {data.pageDetail.user.email}</h4>
          <ul>
            {moreFromTheAuthor.map(anotherPage => (
              <li>
                <Link to={`/blog/${anotherPage.id}`}>{anotherPage.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {userData && userData.me && userData.me.id === data.pageDetail.user.id && (
        <div>
          <Link to={`/blog/${data.pageDetail.id}/edit`}>
            <button>edit page</button>
          </Link>
          <button onClick={handleDeletePage} disabled={isDeleting}>
            {isDeleting ? 'deleting page...' : 'delete page'}
          </button>
        </div>
      )}
    </div>
  )
}
