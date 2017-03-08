import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client'
import { API_URL } from 'config'


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: API_URL,
  }),
  queryTransformer: addTypeName,
  dataIdFromObject: o => o.id,
})

export default client
