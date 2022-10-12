import { View, StyleSheet } from 'react-native'

import { MlHeaderCard, MlStatsCard } from 'components/molecules'
import { RepositoryItemProps } from 'interfaces/Repository'

export function OrCard(props: RepositoryItemProps) {
  return (
    <View key={props.id} style={styles.container}>
      <MlHeaderCard {...props} />
      <MlStatsCard {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingVertical: 5 },
})
