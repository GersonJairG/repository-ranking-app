import { ScrollView, View, StyleSheet } from 'react-native'

import Constants from 'expo-constants'
import { theme } from 'lib/utils/theme'
import AppBarTab from './AppBarTab'

export default function AppBar() {
  return (
    <View>
      <ScrollView horizontal style={styles.container}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Other</AppBarTab>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 12,
    paddingBottom: 12,
    paddingLeft: 10,
  },
})
