import React from 'react'
import { QUERY } from './data'
import { useQuery } from '@apollo/react-hooks'
import { Loader } from '../Loader'
import { ErrorComponent } from '../Error'
import { ListPages } from './__generated__/ListPages'

export const PagesList = React.memo(() => {
  const { data, loading, error } = useQuery<ListPages>(QUERY)

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
          <li key={page.title}>{page.title}</li>
        ))}
      </ul>
    </>
  )
})
