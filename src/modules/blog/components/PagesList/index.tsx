import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { LIST_PAGES_QUERY } from 'modules/blog/gql'
import { ListPages } from 'modules/blog/gql/__generated__/ListPages'
import { Loader } from 'components/Loader'
import { Empty } from 'components/Empty'
import { ErrorComponent } from 'components/Error'
import { PageCard } from '../PageCard'
import { Container } from './styled'

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
    <Container>
      {data.listPages.map(page => <PageCard page={page} />)}
    </Container>
  )
})
