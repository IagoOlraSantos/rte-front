import type { RouteRecordRaw } from 'vue-router'

import { areaRoute } from '../pages/area/route'
import { loginRoute } from '../pages/login/route'
import { registerRoute } from '../pages/register/route'
import { twoFactorRoute } from '../pages/two-factor/route'

export const authRouteName = 'auth'

export const authRoute: RouteRecordRaw = {
  name: authRouteName,
  path: '/',
  component: () => import('../pages/IndexView.vue'),
  children: [areaRoute, loginRoute, registerRoute, twoFactorRoute]
}
