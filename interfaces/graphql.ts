export type AuthenticateInput = {
  username: string
  password: string
}

export interface User {
  id: string
  username: string
  name: string
}

export interface Error {
  error?: string
}
