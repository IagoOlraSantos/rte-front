import { LocalStorageKeys } from '@/value-objects'
import { useStorage } from '../../infra/storage/local-storage/factory'

type UseAreaStorage = {
  getArea(): number | null
  setArea(area: number): void
}

export function useAreaStorage(): UseAreaStorage {
  const storage = useStorage()
  return {
    getArea: () => {
      const areaId = storage.restore({ key: LocalStorageKeys.Area })
      if(areaId) {
        return parseInt(areaId)
      }
      return  areaId;
    },
    setArea: (area: number) => {
      return storage.save({ key: LocalStorageKeys.Area, value: area })
    }
  }
}
