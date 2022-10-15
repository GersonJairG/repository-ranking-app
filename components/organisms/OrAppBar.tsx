import { ScrollView, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { MlTab } from 'components/molecules'
import { useAuth } from 'contexts/AuthContext'
import { theme } from 'utils'

export function OrAppBar() {
  const { profile } = useAuth()

  return (
    <View>
      <ScrollView horizontal style={styles.container}>
        <MlTab to="/">Repositories</MlTab>
        { !profile && <MlTab to="/signin">Sign in</MlTab> }
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
