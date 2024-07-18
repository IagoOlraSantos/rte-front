import { defineStore } from 'pinia'
import type { GlobalState } from '@/stores/shared/global'
import { MedicRoute } from '../providers'

interface MedicState extends GlobalState {}

export const moduleName = 'medic'

export const useMedic = defineStore(moduleName, {
  state: ():MedicState => ({
    context: moduleName,
    appName: 'RTE',
    appDepartment: 'Médico',
    appVersion: '1.0.0',
    appMenu: {
      content: [
        {
          title: 'Home',
          route: MedicRoute.dashboard(),
          icon: 'square-poll-vertical',
          label: 'Dashboard'
        },
        {
          route: MedicRoute.chat(),
          icon: 'message',
          label: 'Chat'
        },
        {
          title: 'Solicitações',
          route: MedicRoute.rts(),
          icon: 'clipboard-list',
          label: 'Lista de RTs'
        },
        {
          route: MedicRoute.rtsFinished(),
          icon: 'check-double',
          label: 'RTs Concluídas'
        },
        {
          title: 'Pacientes',
          route: MedicRoute.patients(),
          icon: 'users',
          label: 'Lista de Pacientes'
        },
        {
          title: 'Insumos',
          route: MedicRoute.supplies(),
          icon: 'pills',
          label: 'Material Transfusional'
        }
      ],
      footer: [
        {
          title: 'Configurações',
          route: MedicRoute.support(),
          icon: 'envelope',
          label: 'Suporte'
        },
        {
          route: MedicRoute.profile(),
          icon: 'address-card',
          label: 'Perfil'
        },
      ]
    }
  })
})
