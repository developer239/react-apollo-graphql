import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { Loader } from '../Loader'
import { ErrorComponent } from '../Error'
import { LIST_PAGES_QUERY } from '../../modules/blog/gql'
import { ListPages } from '../../modules/blog/gql/__generated__/ListPages'

export const PagesList = React.memo(() => {
  const { data, loading, error } = useQuery<ListPages>(LIST_PAGES_QUERY)

  if (error) {
    return <ErrorComponent />
  }

  if (loading) {
    return <Loader />
  }

  if (!data.listPages.length) {
    return <div>there are no pages 😢</div>
  }

  return (
    <>
      {data.listPages.map(page => (
        <div key={page.id}>
          <h2>{page.title}</h2>
          <p>{page.text}</p>
          <Link to={`/blog/${page.id}`}>read more</Link>
        </div>
      ))}
    </>
  )
})
