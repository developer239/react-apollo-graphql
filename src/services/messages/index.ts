import { message } from 'antd'
import { GraphQLError } from 'graphql'

export const showAllGraphQLErrors = (errors: GraphQLError[]) => {
  for (const error of errors) {
    message.error(error.message)
  }
}
