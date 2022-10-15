import { useApolloClient, useMutation, useQuery } from '@apollo/client'

import { AUTHENTICATE } from 'gql/mutations'
import { GET_SESSION } from 'gql/queries'
import { AuthenticateInput, Error, User } from 'interfaces/graphql'
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react'
import { AuthStorage } from 'utils'

interface AuthContextValue {
  profile: User | null
  signIn: ({ username, password }: AuthenticateInput) => any
  signOut: () => void
  setSession: (accessToken: string) => void
}

interface AuthProviderProps {
  children: ReactElement | ReactElement[]
}

const AuthContext = createContext<AuthContextValue>({
  profile: null,
  signIn: ({ username, password }) => {},
  signOut: () => {},
  setSession: () => {},
})

export default function AuthProvider({ children }: AuthProviderProps) {
  const [profile, setProfile] = useState<User | null>(null)
  const apolloClient = useApolloClient()

  const [authenticate, result] = useMutation(AUTHENTICATE)
  const { data: userData, loading, error } = useQuery<{ me: User }>(GET_SESSION)

  async function signIn({
    username,
    password,
  }: AuthenticateInput): Promise<Error> {
    try {
      const response = await authenticate({
        variables: {
          credentials: { username, password },
        },
      })
      const { data } = response
      data && setSession(data.authenticate.accessToken)
      return {}
    } catch (error) {
      console.log('An error has occurred: ', error)
      return { error: `${error}` }
    }
  }

  function signOut() {
    AuthStorage.removeAccessToken()
    setProfile(null)
    apolloClient.resetStore()
  }

  function setSession(accessToken: string) {
    AuthStorage.setAccessToken(accessToken)
    apolloClient.resetStore()
  }

  useEffect(() => {
    if (userData) {
      setProfile(userData.me)
    }
  }, [userData])

  return (
    <AuthContext.Provider value={{ profile, signIn, signOut, setSession }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
