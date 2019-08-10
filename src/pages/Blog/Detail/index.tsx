import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { Loader } from 'components/Loader'
import { ErrorComponent } from 'components/Error'
import { useMe } from 'modules/auth/hooks/useMe'
import { useDeletePage } from 'modules/blog/hooks/useDeletePage'
import { usePageDetail } from 'modules/blog/hooks/usePageDetail'

export const DetailPage: FC<
  RouteComponentProps<{ pageId: string }>
> = props => {
  const pageId = Number(props.match.params.pageId)
  const { data, loading, error } = usePageDetail({ pageId })
  const { data: userData, loading: isLoadingUser } = useMe()
  const [deletePage, { loading: isDeleting }] = useDeletePage()

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
