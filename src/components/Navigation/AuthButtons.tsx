import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Me } from '../../modules/auth/gql/__generated__/Me'
import { ME_QUERY } from '../../modules/auth/gql'
import { Loader } from '../Loader'
import { Link } from 'react-router-dom'

export const AuthButtons = () => {
  const { data, loading } = useQuery<Me>(ME_QUERY)

  if (loading) {
    return <Loader />
  }

  if (data && data.me) {
    return (
      <>
        <li>
          <Link to="/blog/create">Create</Link>
        </li>
        <li>
          <Link to="/me">Me</Link>
        </li>
        <li>
          <Link to="/logout">log out</Link>
        </li>
      </>
    )
  }

  return (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  )
}
