import { View, StyleSheet } from 'react-native'

import { MlContentCard, MlStatsCard } from 'components/molecules'
import { RepositoryItemProps } from 'interfaces/Repository'
import { theme } from 'utils'

export function OrCard(props: RepositoryItemProps) {
  return (
    <View key={props.id} style={styles.container}>
      <MlContentCard {...props} />
      <MlStatsCard {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
    backgroundColor: theme.colors.white,
  },
})
