import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { LIST_PAGES_QUERY } from 'modules/blog/gql'
import { ListPages } from 'modules/blog/gql/__generated__/ListPages'
import { Loader } from 'components/Loader'
import { Empty } from 'components/Empty'
import { ErrorComponent } from 'components/Error'
import { Card } from './styled'

export const PagesList = React.memo(() => {
  const { data, loading, error } = useQuery<ListPages>(LIST_PAGES_QUERY)

  if (error) {
    return <ErrorComponent />
  }

  if (loading) {
    return <Loader />
  }

  if (!data.listPages.length) {
    return <Empty />
  }

  return (
    <>
      {data.listPages.map(page => (
        <Card title={page.title} bordered={false}>
          <p>{page.text}</p>
          <Link to={`/blog/${page.id}`}>Read More</Link>
        </Card>
      ))}
    </>
  )
})
