import type { RouteLocationNormalized } from 'vue-router'
import { useAuth } from '@/views/auth/stores'

export const checkIsAuthenticated = (
  to: RouteLocationNormalized,
) => {
  const auth = useAuth()

  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    return {
      path: '/',
      query: { redirect: to.fullPath }
    }
  }
}
