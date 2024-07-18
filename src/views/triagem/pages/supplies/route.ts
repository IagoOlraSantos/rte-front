import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'triagem'
export const suppliesRouteName = `${rootRouteName}-supplies`;

export const suppliesRoute: RouteRecordRaw = {
  name: suppliesRouteName,
  path: 'supplies',
  component: () => import('./SuppliesView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'Material Transfusional',
    title: 'Material Transfusional'
  },
};