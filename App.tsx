import { NativeRouter, Routes, Route } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'

import Login from 'pages/Login'
import AppBar from 'components/AppBar'
import RepositoryList from 'pages/RepositoryList'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <AppBar />
          <Routes>
            <Route path="/" element={<RepositoryList />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<Text>There's nothing here!</Text>} />
          </Routes>
        </View>
      </NativeRouter>
    </>
  )
}
