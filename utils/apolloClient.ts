import { URI_API } from '@env'
import ApolloClient from 'apollo-boost'

export function createApolloClient() {
  return new ApolloClient({
    uri: `${URI_API}/graphql`,
  })
}
