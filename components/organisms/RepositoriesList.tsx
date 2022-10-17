import { FlatList, RefreshControl, View, StyleSheet } from 'react-native'

import { OrCard } from './OrCard'
import { RepositoryItemProps } from 'interfaces/Repository'
import { theme } from 'utils'

interface RepositoriesListProps {
  repositories: RepositoryItemProps[]
  loading: boolean
  refetch: () => void
}

function ItemSeparator() {
  return <View style={styles.separator} />
}

export function RepositoriesList({
  repositories,
  loading,
  refetch,
}: RepositoriesListProps) {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }: { item: RepositoryItemProps }) => (
        <OrCard {...item} />
      )}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }
    />
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
  separator: {
    height: 10,
  },
})
