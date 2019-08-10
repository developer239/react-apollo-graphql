import React from 'react'
import { Typography } from 'antd'
import { Loader } from 'components/Loader'
import { ErrorComponent } from 'components/Error'
import { useMe } from 'modules/auth/hooks/useMe'

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
      <Typography.Title>Me</Typography.Title>
      <strong>Email:</strong> {data.me.email} <br />
      <strong>First Name:</strong> {data.me.firstName} <br />
      <strong>Last Name:</strong> {data.me.lastName} <br />
    </>
  )
}
