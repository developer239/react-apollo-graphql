import { useEffect } from 'react'
import { useApolloClient } from '@apollo/react-hooks'
import { auth } from '../../services/auth'

export const LogoutPage = (): null => {
  const client = useApolloClient()

  const handleLogOut = async () => {
    await client.resetStore()
    auth.removeAccessToken()
    window.location.replace('/')
  }

  useEffect(() => {
    handleLogOut()
  }, [])

  return null
}
