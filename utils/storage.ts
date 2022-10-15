import AsyncStorage from '@react-native-async-storage/async-storage'

async function setItem(key: string, value: Object) {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (error) {
    console.log(error)
  }
}

async function getItem(key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (error) {
    console.log(error)
  }
}

async function removeItem(key: string) {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.log(error)
  }
}

export const storage = { setItem, getItem, removeItem }
