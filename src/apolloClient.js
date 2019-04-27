import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { withClientState } from 'apollo-link-state'
import { initialState, mutations } from 'modules/counter/clientState'
import { API_URL } from './config'

const cache = new InMemoryCache()
const httpLink = new HttpLink({ uri: API_URL })

const stateLink = withClientState({
  cache,
  defaults: {
    ...initialState,
  },
  resolvers: {
    Mutation: {
      ...mutations,
    },
  },
})

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache,
})

export default client
