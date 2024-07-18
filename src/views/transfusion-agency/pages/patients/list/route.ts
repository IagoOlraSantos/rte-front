import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'transfusion-agency'
export const patientListRouteName = `${rootRouteName}-patient-list`;

export const patientListRoute: RouteRecordRaw = {
  name: patientListRouteName,
  path: 'patients',
  component: () => import('./ListView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'Lista de Pacientes',
    title: 'Lista de Pacientes'
  },
};
