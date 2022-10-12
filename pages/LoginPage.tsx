import { View, StyleSheet } from 'react-native'

import { AtText } from 'components/atoms'
import { OrLoginForm } from 'components/organisms'

export function LoginPage() {
  return (
    <View style={styles.container}>
      <AtText fontSize="subheading" fontWeight="bold" style={styles.welcome}>
        ¡Bienvenido!
      </AtText>
      <OrLoginForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  welcome: {
    textAlign: 'center',
  },
})
