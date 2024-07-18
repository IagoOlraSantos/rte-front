import type { RouteRecordRaw } from 'vue-router';

export const areaRouteName = 'area-route';

export const areaRoute: RouteRecordRaw = {
  name: areaRouteName,
  path: 'area',
  component: () => import('./AreaView.vue'),
  meta: {
    requiresAuth: true,
  }
};
