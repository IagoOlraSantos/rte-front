import type { RouteRecordRaw } from 'vue-router';

export const loginRouteName = 'login-route';

export const loginRoute: RouteRecordRaw = {
  name: loginRouteName,
  path: '',
  component: () => import('./LoginView.vue'),
};
