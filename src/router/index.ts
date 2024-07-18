import { createRouter, createWebHistory } from 'vue-router'
import type { Router } from 'vue-router'
import { notFoundRoute } from './routes/error'
import { accountGateway } from '../infra/gateway/account/factory'
import { useTokenStorage, useUserStorage } from '../services/storage'

import { authRoute } from '../views/auth/routes'
import { financialManagementRoute } from '../views/financial-management/routes'
import { hospitalManagementRoute } from '../views/hospital-management/routes'
import { medicRoute } from '../views/medic/routes'
import { transfusionRoute } from '../views/transfusion/routes'
import { transfusionAgencyRoute } from '../views/transfusion-agency/routes'
import { triagemRoute } from '../views/triagem/routes'
import { checkIsAuthenticated } from '@/router/guards'

export async function bootRouter(): Promise<Router> {
  const account = accountGateway()
  await account
    .ping()
    .then(() => {
      console.log('Usuário logado!')
    })
    .catch((e) => {
      useTokenStorage().removeToken();
      useUserStorage().removeUser();
      window.location.replace('/')
      console.error('Faça login novamente para continuar!', e)
    })

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      authRoute,
      financialManagementRoute,
      hospitalManagementRoute,
      medicRoute,
      transfusionRoute,
      transfusionAgencyRoute,
      triagemRoute,
      notFoundRoute
    ]
  })

  router.beforeEach(checkIsAuthenticated)

  router.onError((error) => {
    console.error('Router error:', error)
  })

  return router
}
