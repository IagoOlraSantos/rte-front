import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'transfusion'
export const chatRouteName = `${rootRouteName}-chat`;

export const chatRoute: RouteRecordRaw = {
  name: chatRouteName,
  path: 'chat',
  component: () => import('./ChatView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'Chat',
    title: 'Chat'
  },
};
