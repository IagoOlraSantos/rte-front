import type { RouteRecordRaw } from 'vue-router';
import { patientListRoute } from './list/route'
import { patientCreateRoute } from './create/route'

const rootRouteName = 'medic'
export const patientsRouteName = `${rootRouteName}-patients-index`;

export const patientsRoute: RouteRecordRaw = {
  name: patientsRouteName,
  path: 'patients',
  component: () => import('./IndexView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'Lista de Pacientes',
  },
  redirect: patientListRoute,
  children: [
    patientListRoute,
    patientCreateRoute
  ]
};
