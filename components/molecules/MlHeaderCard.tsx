import { View, Image, StyleSheet } from 'react-native'

import { AtText } from 'components/atoms'
import { RepositoryItemHeaderProps } from 'interfaces/Repository'
import { theme } from 'utils'

export function MlHeaderCard(props: RepositoryItemHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image style={styles.avatar} source={{ uri: props.ownerAvatarUrl }} />
      </View>
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
  avatarWrapper: {
    marginRight: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  details: {
    flex: 1,
  },
  language: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 3,
  },
})
