import { StyleSheet, View } from 'react-native'

import Constants from 'expo-constants'
import StyledText from 'lib/StyledText'
import { theme } from 'lib/utils/theme'

export default function AppBar() {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" style={styles.text}>
        Hello
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  text: {
    color: theme.appBar.textPrimary,
  },
})
