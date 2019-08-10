import React from 'react'
import { H1 } from 'components/Typography/H1'
import { Loader } from 'components/Loader'
import { ErrorComponent } from 'components/Error'
import { useMe } from 'modules/auth/hooks/useMe'
import { RelevantPagesList } from 'modules/blog/components/RelevantPagesList'

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
      <strong>Email:</strong> {data.me.email} <br />
      <strong>First Name:</strong> {data.me.firstName} <br />
      <strong>Last Name:</strong> {data.me.lastName} <br />
      <RelevantPagesList title="Your Pages" pages={data.me.pages} />
    </>
  )
}
