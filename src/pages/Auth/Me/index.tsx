import React from 'react'
import { H1 } from 'components/Typography/H1'
import { Loader } from 'components/Loader'
import { ErrorComponent } from 'components/Error'
import { useMe } from 'modules/auth/hooks/useMe'
import { RelevantPagesList } from 'modules/blog/components/RelevantPagesList'
import { Info } from './styled'

export const MePage = () => {
  const { data, loading, error } = useMe()

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorComponent>{error.message}</ErrorComponent>
  }

  return (
    <>
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
        <RelevantPagesList title="Your Pages" pages={data.me.pages} />
      )}
    </>
  )
}
