import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import Constants from 'expo-constants'
import { AuthStorage } from 'utils/authStorage'

const APOLLO_URI = Constants.manifest?.extra?.apolloUri

const httpLink = createHttpLink({ uri: `${APOLLO_URI}/graphql`, fetch })

const authLink = setContext(async (_, { headers }) => {
  const token = await AuthStorage.getAccessToken()
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
