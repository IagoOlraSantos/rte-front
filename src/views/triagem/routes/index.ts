import type { RouteRecordRaw } from 'vue-router';
import { getAuthParamsFromUrl } from '@/router/guards/GetAuthParamsFromUrl'

import { chatRoute } from '../pages/chat/route'
import { dashboardRoute } from '../pages/dashboard/route'
import { patientListRoute } from '../pages/patients/list/route'
import { profileRoute } from '../pages/profile/route'
import { rtsListRoute } from '../pages/rts/list/route'
import { rtsListFinishedRoute } from '../pages/rts/list-finished/route'
import { suppliesRoute } from '../pages/supplies/route'
import { supportRoute } from '../pages/support/route'

export const triagemRouteName = 'triagem';

export const triagemRoute: RouteRecordRaw = {
  name: triagemRouteName,
  path: '/triagem',
  component: () => import('../pages/IndexView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'Triagem',
  },
  redirect: dashboardRoute,
  beforeEnter: getAuthParamsFromUrl,
  children: [
    chatRoute,
    dashboardRoute,
    patientListRoute,
    profileRoute,
    rtsListRoute,
    rtsListFinishedRoute,
    suppliesRoute,
    supportRoute,
  ]
};
