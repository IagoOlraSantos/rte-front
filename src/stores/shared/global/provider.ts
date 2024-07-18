import type { InjectionKey } from 'vue'
import type { GlobalState } from './state'

export const GlobalProvider = {
  info: Symbol() as InjectionKey<GlobalState>
}
