import ApolloClient from 'apollo-boost'

export const apolloClient = new ApolloClient({
  uri: 'https://node-type-orm-graphql.herokuapp.com/graphql',
})
