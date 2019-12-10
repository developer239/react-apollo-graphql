import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { auth } from 'services/auth'
import { handleRefreshToken } from 'services/token'
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

export const apolloClient: ApolloClient<unknown> = new ApolloClient({
  link: ApolloLink.from([
    onError(({ forward, graphQLErrors, operation }) => {
      if (
        graphQLErrors.length &&
        graphQLErrors[0].message === 'Token Expired'
      ) {
        return handleRefreshToken({
          client: apolloClient,
          forward,
          operation,
        })
      }
    }),
    authLink,
    httpLink,
  ]),
  cache: new InMemoryCache(),
})
