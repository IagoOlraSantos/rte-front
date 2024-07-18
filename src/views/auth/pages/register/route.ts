import type { RouteRecordRaw } from 'vue-router';

export const registerRouteName = 'register-route';

export const registerRoute: RouteRecordRaw = {
  name: registerRouteName,
  path: 'register',
  component: () => import('./RegisterView.vue'),
};
