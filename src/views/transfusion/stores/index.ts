import { defineStore } from 'pinia'
import type { GlobalState } from '@/stores/shared/global'
import { TransfusionRoute } from '../providers'

interface TransfusionState extends GlobalState {}

export const moduleName = 'transfusion'

export const useTransfusion = defineStore(moduleName, {
  state: ():TransfusionState => ({
    context: moduleName,
    appName: 'RTE',
    appDepartment: 'Transfusão',
    appVersion: '1.0.0',
    appMenu: {
      content: [
        {
          title: 'Home',
          route: TransfusionRoute.dashboard(),
          icon: 'square-poll-vertical',
          label: 'Dashboard'
        },
        {
          route: TransfusionRoute.chat(),
          icon: 'message',
          label: 'Chat'
        },
        {
          title: 'Solicitações',
          route: TransfusionRoute.rts(),
          icon: 'clipboard-list',
          label: 'Lista de RTs'
        },
        {
          route: TransfusionRoute.rtsFinished(),
          icon: 'check-double',
          label: 'RTs Concluídas'
        },
        {
          title: 'Pacientes',
          route: TransfusionRoute.patients(),
          icon: 'users',
          label: 'Lista de Pacientes'
        },
        {
          title: 'Insumos',
          route: TransfusionRoute.supplies(),
          icon: 'pills',
          label: 'Material Transfusional'
        }
      ],
      footer: [
        {
          title: 'Configurações',
          route: TransfusionRoute.support(),
          icon: 'envelope',
          label: 'Suporte'
        },
        {
          route: TransfusionRoute.profile(),
          icon: 'address-card',
          label: 'Perfil'
        },
      ]
    }
  })
})
