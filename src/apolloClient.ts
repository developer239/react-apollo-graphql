import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { auth } from 'services/auth'
import { SERVER_URL } from 'config'

const httpLink = createHttpLink({
  uri: SERVER_URL,
})

const authLink = setContext((_, { headers }) => {
  const token = auth.getAccessToken()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
