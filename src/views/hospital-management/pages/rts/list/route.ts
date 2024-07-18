import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'hospital-management'
export const rtsListRouteName = `${rootRouteName}-rts-list`;

export const rtsListRoute: RouteRecordRaw = {
  name: rtsListRouteName,
  path: 'rts',
  component: () => import('./ListView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'Lista de Rts',
    title: 'Lista de Rts'
  },
};
