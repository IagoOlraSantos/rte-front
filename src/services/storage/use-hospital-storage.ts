import { LocalStorageKeys } from '@/value-objects'
import { useStorage } from '../../infra/storage/local-storage/factory'

type UseHospitalStorage = {
  getHospital(): number | null
  setHospital(area: number): void
}

export function useHospitalStorage(): UseHospitalStorage {
  const storage = useStorage()
  return {
    getHospital: () => {
      const hospitalId = storage.restore({ key: LocalStorageKeys.Hospital })
      if(hospitalId) {
        return parseInt(hospitalId)
      }
      return hospitalId
    },
    setHospital: (hospital: number) => {
      return storage.save({ key: LocalStorageKeys.Hospital, value: hospital })
    }
  }
}
