import type { RouteRecordRaw } from 'vue-router';

const rootRouteName = 'medic'
export const patientCreateRouteName = `${rootRouteName}-patient-create`;

export const patientCreateRoute: RouteRecordRaw = {
  name: patientCreateRouteName,
  path: 'create',
  component: () => import('./CreateView.vue'),
  meta: {
    requiresAuth: true,
    breadcrumb: 'Cadastro de Paciente',
    title: 'Cadastro de Paciente'
  },
};
