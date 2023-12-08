import { api } from '../services'
import { userStorage } from '../store/user'

export default function (): void {
  const token = userStorage.get()?.access_token
  if (token !== undefined) api.setSecurityData(token)
}