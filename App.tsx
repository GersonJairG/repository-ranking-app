import { ApolloProvider } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { NativeRouter, Routes, Route } from 'react-router-native'

import { AtText } from 'components/atoms'
import { OrAppBar } from 'components/organisms'
import AuthProvider from 'contexts/AuthContext'
import { LoginPage, RepositoriesPage } from 'pages'
import { apolloClient } from 'utils'

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <StatusBar style="light" />
          <View style={{ flex: 1 }}>
            <OrAppBar />
            <Routes>
              <Route path="/" element={<RepositoriesPage />} />
              <Route path="/signin" element={<LoginPage />} />
              <Route
                path="*"
                element={<AtText>There is nothing here!😴</AtText>}
              />
            </Routes>
          </View>
        </AuthProvider>
      </ApolloProvider>
    </NativeRouter>
  )
}
