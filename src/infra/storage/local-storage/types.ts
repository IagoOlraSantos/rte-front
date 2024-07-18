export type StorageAddPayload = {
  key: string
  value: any
}

export type StorageGetPayload = Omit<StorageAddPayload, 'value'>
export type StorageRemovePayload = Omit<StorageAddPayload, 'value'>

export interface Storage<D> {
  save(payload: StorageAddPayload): void;
  restore(payload: StorageGetPayload): D;
  remove(payload: StorageRemovePayload): void;
}
