import { StyleSheet, View } from 'react-native'
import { AtButton, AtImage, AtText } from 'components/atoms'
import { theme } from 'utils'
import { useAuth } from 'contexts/AuthContext'

interface OrHeaderProps {
  avatarUrl?: string
  username: string
  name: string
}

export function OrHeader({ avatarUrl, name, username }: OrHeaderProps) {
  const { signOut } = useAuth()

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <AtImage uri={avatarUrl} type="round" size={40} />
        <View style={styles.details}>
          <AtText>{name}</AtText>
          <AtText fontSize="small" fontWeight="bold">
            {username}
          </AtText>
        </View>
      </View>
      <AtButton
        title="Sign out"
        style={styles.singOutButton}
        styleText={styles.singOutButtonText}
        onPress={signOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems: 'center',
    marginVertical: 5,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 15,
  },
  details: {
    display: 'flex',
    justifyContent: 'center',
  },
  singOutButton: {
    backgroundColor: 'transparent',
  },
  singOutButtonText: {
    color: theme.colors.primary,
    fontWeight: 'normal'
  },
})
