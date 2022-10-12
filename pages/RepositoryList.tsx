import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'

import RepositoryItem from 'components/RepositoryItem'
import useRepositories from 'hooks/useRepositories'
import { RepositoryItemProps } from 'interfaces/Repository'
import StyledText from 'lib/StyledText'

export default function RepositoryList() {
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
            <RepositoryItem {...item} />
          )}
        />
      ) : error ? (
        <>
          <StyledText fontSize="subheading" style={styles.noData}>
            ¡Tuvimos un error!🤕
          </StyledText>
          <StyledText fontSize="body" style={styles.noData}>
            {error}
          </StyledText>
        </>
      ) : (
        <StyledText fontSize="subheading" style={styles.noData}>
          ¡Lo sentimos! no encontramos datos ☹️
        </StyledText>
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
