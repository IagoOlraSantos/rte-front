import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'transfusion'
export const rtsListFinishedRouteName = `${rootRouteName}-rts-list-finished`;

export const rtsListFinishedRoute: RouteRecordRaw = {
  name: rtsListFinishedRouteName,
  path: 'rts-finished',
  component: () => import('./ListView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'RTs Concluídas',
    title: 'RTs Concluídas'
  },
};
