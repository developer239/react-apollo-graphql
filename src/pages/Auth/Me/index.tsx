import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { ME_QUERY } from '../../../modules/auth/gql'
import { Loader } from '../../../components/Loader'
import { ErrorComponent } from '../../../components/Error'
import { Me } from '../../../modules/auth/gql/__generated__/Me'

export const MePage = () => {
  const { data, loading, error } = useQuery<Me>(ME_QUERY)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorComponent>{error.message}</ErrorComponent>
  }

  return (
    <div>
      <h1>Me Page</h1>
      email: {data.me.email} <br />
      name: {data.me.firstName} {data.me.lastName}
    </div>
  )
}
