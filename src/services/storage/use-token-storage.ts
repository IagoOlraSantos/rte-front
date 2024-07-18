import { LocalStorageKeys } from '@/value-objects'
import { useStorage } from '../../infra/storage/local-storage/factory'

type UseTokenStorage = {
  getToken(): string | null
  setToken(token: string): void
  removeToken(): void
}

export function useTokenStorage(): UseTokenStorage {
  const storage = useStorage()
  return {
    getToken: () => {
      return storage.restore({ key: LocalStorageKeys.Token })
    },
    setToken: (token: string) => {
      storage.save({ key: LocalStorageKeys.Token, value: token })
    },
    removeToken() {
      storage.remove({ key: LocalStorageKeys.Token })
    }
  }
}
