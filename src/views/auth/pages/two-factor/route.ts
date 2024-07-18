import type { RouteRecordRaw } from 'vue-router';

export const twoFactorRouteName = 'two-factor-route';

export const twoFactorRoute: RouteRecordRaw = {
  name: twoFactorRouteName,
  path: 'two-factor',
  component: () => import('./TwoFactorView.vue'),
  meta: {
    requiresAuth: true,
  }
};
