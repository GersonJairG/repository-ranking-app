import { storage } from 'utils/storage'

const TOKEN_KEY = 'auth'

const getAccessToken = async () => await storage.getItem(TOKEN_KEY)

const setAccessToken = async (accessToken: string) =>
  await storage.setItem(TOKEN_KEY, accessToken)

const removeAccessToken = async () => await storage.removeItem(TOKEN_KEY)

export const AuthStorage = { getAccessToken, setAccessToken, removeAccessToken }
