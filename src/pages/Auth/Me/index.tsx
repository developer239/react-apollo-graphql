import React from 'react'
import { Info } from './styled'
import { H1 } from 'components/Typography/H1'
import { Loader } from 'components/Loader'
import { ErrorAlert } from 'components/ErrorAlert'
import { useMe } from 'modules/auth/hooks/useMe'
import { RelevantPagesList } from 'modules/blog/components/RelevantPagesList'

export const PAGE_ME_TEST_ID = 'me-page'

export const MePage = () => {
  const { data, loading, error } = useMe()

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorAlert>{error.message}</ErrorAlert>
  }

  return (
    <div data-testid={PAGE_ME_TEST_ID}>
      <H1>Me</H1>
      <Info>
        <strong>Email:</strong> {data.me.email}
      </Info>
      <Info>
        <strong>First Name:</strong> {data.me.firstName}
      </Info>
      <Info>
        <strong>Last Name:</strong> {data.me.lastName}
      </Info>
      {Boolean(data.me.pages.length) && (
        <RelevantPagesList pages={data.me.pages} title="Your Pages" />
      )}
    </div>
  )
}
