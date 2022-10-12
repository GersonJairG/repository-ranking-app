import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'

import { OrCard } from 'components/organisms'
import { AtText } from 'components/atoms'
import useRepositories from 'hooks/useRepositories'
import { RepositoryItemProps } from 'interfaces/Repository'

export function RepositoriesPage() {
  const { repositories, isLoading, error } = useRepositories()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {repositories?.length ? (
        <FlatList
          data={repositories}
          ItemSeparatorComponent={() => <Text> </Text>}
          renderItem={({ item }: { item: RepositoryItemProps }) => (
            <OrCard {...item} />
          )}
        />
      ) : error ? (
        <>
          <AtText fontSize="subheading" style={styles.noData}>
            ¡Tuvimos un error!🤕
          </AtText>
          <AtText fontSize="body" style={styles.noData}>
            {error}
          </AtText>
        </>
      ) : (
        <AtText fontSize="subheading" style={styles.noData}>
          ¡Lo sentimos! no encontramos datos ☹️
        </AtText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  noData: {
    textAlign: 'center',
  },
})
