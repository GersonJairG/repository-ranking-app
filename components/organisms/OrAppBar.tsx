import { ScrollView, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { MlTab } from 'components/molecules'
import { theme } from 'utils'

export function OrAppBar() {
  return (
    <View>
      <ScrollView horizontal style={styles.container}>
        <MlTab to="/">Repositories</MlTab>
        <MlTab to="/signin">Other</MlTab>
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
