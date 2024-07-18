import { inject } from 'vue'
import { RouterProvider } from '../../router/provider'
import { throwInjectError } from '../../services/errors/inject-error'

export function useAppPages () {
  const appPages = inject(RouterProvider.AppPages)

  if (!appPages) {
    throwInjectError('AppPages')
  }

  return appPages
}
