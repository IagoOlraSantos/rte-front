import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'transfusion'
export const profileRouteName = `${rootRouteName}-profile`;

export const profileRoute: RouteRecordRaw = {
  name: profileRouteName,
  path: 'profile',
  component: () => import('./ProfileView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'Perfil',
    title: 'Perfil'
  },
};
