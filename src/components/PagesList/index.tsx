import React from 'react'
import { useQuery } from '@apollo/react-hooks'
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

  return (
    <>
      <h1>Pages List</h1>
      <ul>
        {data.listPages.map(page => (
          <li key={page.id}>{page.title}</li>
        ))}
      </ul>
    </>
  )
})
