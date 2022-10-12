import { View, StyleSheet } from 'react-native'
import StyledText from 'lib/StyledText'
import LoginForm from 'components/LoginForm'

export default function Login() {
  return (
    <View style={styles.container}>
      <StyledText
        fontSize="subheading"
        fontWeight="bold"
        style={styles.welcome}
      >
        ¡Bienvenido!
      </StyledText>
      <LoginForm />
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
