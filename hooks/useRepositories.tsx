import { useQuery } from '@apollo/client'

import { responseAPI } from 'interfaces/Repository'
import { GET_REPOSITORIES } from 'gql/queries'

export function useRepositories() {
  const { data, loading, error, refetch } = useQuery<responseAPI>(
    GET_REPOSITORIES,
    { fetchPolicy: 'cache-and-network' }
  )

  const repositories = data?.repositories
    ? data.repositories?.edges.map((edge) => edge.node)
    : []

  return { repositories, loading, error, refetch }
}
