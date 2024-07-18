import { inject, provide } from 'vue'
import { throwInjectError } from '../../services/errors/inject-error'
import { GlobalProvider } from '../../stores/shared/global'
import type { GlobalState } from '../../stores/shared/global'

export function useGlobalState () {
  const globalState = inject(GlobalProvider.info)

  if (!globalState) {
    throwInjectError('AppInfo')
  }

  return globalState
}

export function provideGlobalState (state: GlobalState) {
  provide(GlobalProvider.info, state)
}
