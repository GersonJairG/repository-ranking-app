import { ApolloProvider } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { NativeRouter, Routes, Route } from 'react-router-native'

import { OrAppBar } from 'components/organisms'
import { LoginPage, RepositoriesPage } from 'pages'
import { createApolloClient } from 'utils'

const apolloClient = createApolloClient()

export default function App() {
  return (
    <ApolloProvider client={apolloClient as any}>
      <StatusBar style="light" />
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <OrAppBar />
          <Routes>
            <Route path="/" element={<RepositoriesPage />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="*" element={<Text>No hay nada aqui!😴</Text>} />
          </Routes>
        </View>
      </NativeRouter>
    </ApolloProvider>
  )
}
