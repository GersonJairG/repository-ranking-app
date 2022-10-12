import { View, StyleSheet } from 'react-native'

import { RepositoryItemProps } from 'interfaces/Repository'
import RepositoryStats from './RepositoryStats'
import RepositoryItemHeader from './RepositoryItemHeader'

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingVertical: 5 },
})
