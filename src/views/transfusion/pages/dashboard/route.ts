import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'transfusion'
export const dashboardRouteName = `${rootRouteName}-dashboard`;

export const dashboardRoute: RouteRecordRaw = {
  name: dashboardRouteName,
  path: '',
  component: () => import('./DashboardView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'Dashboard',
    title: 'Dashboard'
  },
};