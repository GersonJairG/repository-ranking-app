import { StyleSheet, View, ActivityIndicator } from 'react-native'

import { OrHeader, RepositoriesList } from 'components/organisms'
import { AtText } from 'components/atoms'
import { useAuth } from 'contexts/AuthContext'
import { useRepositories } from 'hooks'
import { theme } from 'utils'

export function RepositoriesPage() {
  const { repositories, loading, error, refetch } = useRepositories()
  const { profile } = useAuth()

  if (!repositories?.length && loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <AtText fontSize="subheading" style={styles.noData}>
          ¡Tuvimos un error!🤕
        </AtText>
        <AtText fontSize="body" style={styles.noData}>
          {error.message}
        </AtText>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {profile && <OrHeader {...profile} />}
      {repositories?.length ? (
        <RepositoriesList
          repositories={repositories as []}
          loading={loading}
          refetch={refetch}
        />
      ) : (
        <AtText fontSize="subheading" style={styles.noData}>
          We're sorry! we did not find data ☹️
        </AtText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.main,
  },
  noData: {
    textAlign: 'center',
  },
})
