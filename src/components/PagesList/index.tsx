import React from 'react'
import { IPage, QUERY } from './data'
import { useQuery } from '@apollo/react-hooks'
import { Loader } from '../Loader'
import { ErrorComponent } from '../Error'

export const PagesList = React.memo(() => {
  const { data, loading, error } = useQuery(QUERY)

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
        {data.listPages.map((page: IPage) => (
          <li key={page.title}>{page.title}</li>
        ))}
      </ul>
    </>
  )
})
