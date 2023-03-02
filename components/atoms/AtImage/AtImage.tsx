import { View, Image, StyleSheet } from 'react-native'

type Types = 'round' | 'square'

interface AtImageProps {
  uri?: string
  size?: number
  type?: Types
}

export function AtImage({ uri, type = 'square', size = 50 }: AtImageProps) {
  const avatarStyles = [
    styles.avatar,
    {
      width: size,
      height: size,
    },
    type === 'square' && { borderRadius: size * 0.1 },
    type === 'round' && { borderRadius: size / 2 },
  ]
  return (
    <View style={styles.container}>
      <Image
        style={avatarStyles}
        source={uri ? { uri } : require('assets/default-profile.png')}
        testID="at-image"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
  },
  avatar: {},
})
