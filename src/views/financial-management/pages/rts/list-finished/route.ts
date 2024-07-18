import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'financial-management'
export const rtsListFinishedRouteName = `${rootRouteName}-rts-list-finished`;

export const rtsListFinishedRoute: RouteRecordRaw = {
  name: rtsListFinishedRouteName,
  path: 'rts-finished',
  component: () => import('./ListView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'RTs Finalizadas',
    title: 'RTs Finalizadas'
  },
};
