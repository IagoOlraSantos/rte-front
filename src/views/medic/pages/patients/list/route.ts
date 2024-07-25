import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'medic'
export const patientListRouteName = `${rootRouteName}-patient-list`;

export const patientListRoute: RouteRecordRaw = {
  name: patientListRouteName,
  path: '',
  component: () => import('./ListView.vue'),
  meta: {
    requiresAuth: true,
    title: 'Lista de Pacientes'
  },
};
