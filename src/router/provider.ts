import type { InjectionKey } from 'vue'
import type { AppRoutes } from './provider/app-routes'
import type { AppPages } from './provider/app-pages'

export const RouterProvider = {
  AppRoutes: Symbol() as InjectionKey<typeof AppRoutes>,
  AppPages: Symbol() as InjectionKey<typeof AppPages>
}
