import { FC, useEffect } from 'react'
import { message } from 'antd'
import { useApolloClient } from '@apollo/react-hooks'
import { auth } from 'services/auth'
import { RouteComponentProps } from 'react-router'

export const LogoutPage: FC<RouteComponentProps> = (props): null => {
  const client = useApolloClient()

  const handleLogOut = async () => {
    await auth.logOut()
    props.history.push('/')
    message.info('You are now logged out.')
    await client.resetStore()
  }

  useEffect(() => {
    handleLogOut()
  }, [])

  return null
}
