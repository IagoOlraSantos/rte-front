import type { RouteRecordRaw } from 'vue-router'

export const notFoundRouteName = 'not-found-route'

export const notFoundRoute: RouteRecordRaw = {
  name: notFoundRouteName,
  path: '/:catchAll(.*)*',
  component: () => import('../../../views/error/NotFoundError.vue'),
}
