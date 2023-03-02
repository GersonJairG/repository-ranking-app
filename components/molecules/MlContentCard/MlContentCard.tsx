import { View, StyleSheet } from 'react-native'

import { AtText, AtImage } from 'components/atoms'
import { RepositoryItemHeaderProps } from 'interfaces/Repository'
import { theme } from 'utils'

export function MlContentCard(props: RepositoryItemHeaderProps) {
  return (
    <View style={styles.container} testID="ml-content-card">
      <AtImage uri={props.ownerAvatarUrl} type="square" />
      <View style={styles.details}>
        <AtText fontSize="subheading" fontWeight="bold">
          {props.fullName}
        </AtText>
        <AtText color="secondary">{props.description}</AtText>
        <AtText style={styles.language}>{props.language}</AtText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    flex: 1,
  },
  language: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: theme.measures.radius,
    overflow: 'hidden',
    marginVertical: 3,
  },
})
