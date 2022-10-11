import { View, StyleSheet, Image } from 'react-native'

import { RepositoryItemProps } from 'interfaces/Repository'
import StyledText from '../lib/StyledText'
import RepositoryStats from './RepositoryStats'
import RepositoryItemHeader from './RepositoryItemHeader'
import { theme } from 'lib/utils/theme'

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader { ...props }/>
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingVertical: 5 }
})
