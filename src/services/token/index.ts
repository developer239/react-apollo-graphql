import { Observable } from 'apollo-client/util/Observable'
import { message } from 'antd'
import { ApolloClient } from 'apollo-client'
import { NextLink, Operation } from 'apollo-link'
import {
  AccessToken,
  AccessTokenVariables,
} from 'modules/auth/gql/__generated__/AccessToken'
import { ACCESS_TOKEN_QUERY } from 'modules/auth/gql'
import { browserHistory } from 'appHistory'
import { auth } from '../auth'

export const handleRefreshToken = ({
  client,
  forward,
  operation,
}: {
  client: ApolloClient<unknown>
  forward: NextLink
  operation: Operation
}) => {
  return new Observable(subscriber => {
    client
      .query<AccessToken, AccessTokenVariables>({
        query: ACCESS_TOKEN_QUERY,
        variables: { refreshToken: auth.getRefreshToken() },
      })
      .then(result => {
        auth.setAccessToken(result.data.accessToken)
        subscriber.next(result)
        subscriber.complete()
      })
      .catch(error => {
        message.error(error.message)
        auth.logOut()
        browserHistory.push('/login')
      })
  }).flatMap(() => forward(operation))
}
