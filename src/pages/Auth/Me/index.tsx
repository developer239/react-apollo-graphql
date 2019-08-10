import React from 'react'
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
    <div>
      <h1>Me</h1>
      email: {data.me.email} <br />
      name: {data.me.firstName} {data.me.lastName}
    </div>
  )
}
