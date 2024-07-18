import { defineStore } from 'pinia'
import type { GlobalState } from '@/stores/shared/global'
import { HospitalManagementRoute } from '../providers'

interface HospitalManagementState extends GlobalState {}

export const moduleName = 'hospital-management'

export const useHospitalManagement = defineStore(moduleName, {
  state: (): HospitalManagementState => ({
    context: moduleName,
    appName: 'RTE',
    appDepartment: 'Gestão Hospitalar',
    appVersion: '1.0.0',
    appMenu: {
      content: [
        {
          title: 'Home',
          route: HospitalManagementRoute.dashboard(),
          icon: 'square-poll-vertical',
          label: 'Dashboard'
        },
        {
          route: HospitalManagementRoute.chat(),
          icon: 'message',
          label: 'Chat'
        },
        {
          title: 'Solicitações',
          route: HospitalManagementRoute.rts(),
          icon: 'clipboard-list',
          label: 'Lista de RTs'
        },
        {
          route: HospitalManagementRoute.rtsFinished(),
          icon: 'check-double',
          label: 'RTs Concluídas'
        },
        {
          title: 'Insumos',
          route: HospitalManagementRoute.supplies(),
          icon: 'pills',
          label: 'Material Transfusional'
        }
      ],
      footer: [
        {
          title: 'Configurações',
          route: HospitalManagementRoute.support(),
          icon: 'envelope',
          label: 'Suporte'
        },
        {
          route: HospitalManagementRoute.profile(),
          icon: 'address-card',
          label: 'Perfil'
        },
      ]
    }
  })
})
