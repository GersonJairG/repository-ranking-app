import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native'

import { OrCard, OrHeader } from 'components/organisms'
import { AtText } from 'components/atoms'
import { useRepositories } from 'hooks'
import { RepositoryItemProps } from 'interfaces/Repository'
import { theme } from 'utils'
import { useAuth } from 'contexts/AuthContext'

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

  const ItemSeparator = () => <View style={styles.separator} />

  return (
    <View style={styles.container}>
      { profile && <OrHeader {...profile} />}
      {repositories?.length ? (
        <FlatList
          data={repositories as []}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }: { item: RepositoryItemProps }) => (
            <OrCard {...item} />
          )}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={refetch} />
          }
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
    backgroundColor: theme.colors.main
  },
  noData: {
    textAlign: 'center',
  },
  separator: {
    height: 10,
  },
})
