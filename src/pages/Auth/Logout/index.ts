import { FC, useEffect } from 'react'
import { message } from 'antd'
import { useApolloClient } from '@apollo/react-hooks'
import { RouteComponentProps } from 'react-router'
import { auth } from 'services/auth'

export const LogoutPage: FC<RouteComponentProps> = (props): null => {
  const client = useApolloClient()

  const handleLogOut = async () => {
    auth.logOut()
    props.history.push('/')
    await message.info('You are now logged out.')
    await client.resetStore()
  }

  useEffect(() => {
    // TODO: Fix floating promise
    // eslint-disable-next-line
    handleLogOut()
  }, [])

  return null
}
