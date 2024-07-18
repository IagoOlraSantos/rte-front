import { LocalStorageKeys } from '@/value-objects'
import { useStorage } from '../../infra/storage/local-storage/factory'
import type { User } from '../../models/Account'

type UseUserStorage = {
  getUser(): User | null
  setUser(user: object): void
  removeUser(): void
}

export function useUserStorage(): UseUserStorage {
  const storage = useStorage()
  return {
    getUser: () => {
      const user = storage.restore({ key: LocalStorageKeys.User })
      return  user;
    },
    setUser: (user: object) => {
      storage.save({ key: LocalStorageKeys.User, value: user })
    },
    removeUser: () => {
      storage.remove({ key: LocalStorageKeys.User })
    },
  }
}
