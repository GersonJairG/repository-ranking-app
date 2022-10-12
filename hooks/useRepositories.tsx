import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { URI_API } from '@env'
import { GET_REPOSITORIES } from 'gql/queries'
import { RepositoryItemProps, responseAPI } from 'interfaces/Repository'

export default function useRepositories() {
  const [repositories, setRepositories] = useState<
    RepositoryItemProps[] | null
  >()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  function convertRepositories(repositoriesAPI: responseAPI) {
    return repositoriesAPI.edges.map((edge) => edge.node)
  }

  async function fetchRepositories() {
    try {
      setIsLoading(true)
      const response = await fetch(`${URI_API}/api/repositories`)
      const responseJson = await response.json()
      const repos = responseJson && convertRepositories(responseJson)
      setRepositories(repos)
    } catch (error: any) {
      console.error(error)
      setError(`${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  return { repositories, isLoading, error }
}
