import { inject } from 'vue'
import { RouterProvider } from '../../router/provider'
import { throwInjectError } from '../../services/errors/inject-error'

export function useAppRoutes () {
  const appRoutes = inject(RouterProvider.AppRoutes)

  if (!appRoutes) {
    throwInjectError('AppRoutes')
  }

  return appRoutes
}
