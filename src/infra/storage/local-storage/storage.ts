import type { Storage, StorageAddPayload, StorageRemovePayload, StorageGetPayload } from './types'

export default class AppStorage<D = any> implements Storage<D> {
  static instance: AppStorage;

  private constructor() {}

  static getInstance() {
    if(!AppStorage.instance) {
      AppStorage.instance = new AppStorage()
    }
    return AppStorage.instance
  }

  save({ key, value }: StorageAddPayload) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  restore({ key }: StorageGetPayload): any {
    const data = localStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    }
  }
  remove({ key }: StorageRemovePayload) {
    localStorage.removeItem(key)
  }
}
