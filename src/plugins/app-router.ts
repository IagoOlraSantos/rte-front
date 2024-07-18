import type { App, ObjectPlugin } from 'vue'
import { RouterProvider } from '../router/provider'
import { AppRoutes } from '../router/provider/app-routes'
import { AppPages } from '../router/provider/app-pages'

const AppRouterPlugin: ObjectPlugin = {
  install(app: App) {
    app.provide(RouterProvider.AppRoutes, AppRoutes)
    app.provide(RouterProvider.AppPages, AppPages)
  }
}

export default AppRouterPlugin
