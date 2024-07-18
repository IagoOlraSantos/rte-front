import AppStorage from './storage'

export function useStorage() {
  return AppStorage.getInstance();
}
