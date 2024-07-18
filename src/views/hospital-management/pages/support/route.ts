import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'hospital-management'
export const supportRouteName = `${rootRouteName}-support`;

export const supportRoute: RouteRecordRaw = {
  name: supportRouteName,
  path: 'support',
  component: () => import('./SupportView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'Suporte',
    title: 'Suporte'
  },
};
