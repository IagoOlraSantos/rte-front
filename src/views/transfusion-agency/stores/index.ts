import { defineStore } from 'pinia'
import type { GlobalState } from '@/stores/shared/global'
import { TransfusionAgencyRoute } from '../providers'

interface TransfusionAgencyState extends GlobalState {}

export const moduleName = 'transfusion-agency'

export const useTransfusionAgency = defineStore(moduleName, {
  state: ():TransfusionAgencyState => ({
    context: moduleName,
    appName: 'RTE',
    appDepartment: 'Agência Transfusional',
    appVersion: '1.0.0',
    appMenu: {
      content: [
        {
          title: 'Home',
          route: TransfusionAgencyRoute.dashboard(),
          icon: 'square-poll-vertical',
          label: 'Dashboard'
        },
        {
          route: TransfusionAgencyRoute.chat(),
          icon: 'message',
          label: 'Chat'
        },
        {
          title: 'Solicitações',
          route: TransfusionAgencyRoute.rts(),
          icon: 'clipboard-list',
          label: 'Lista de RTs'
        },
        {
          route: TransfusionAgencyRoute.rtsFinished(),
          icon: 'check-double',
          label: 'RTs Concluídas'
        },
        {
          title: 'Pacientes',
          route: TransfusionAgencyRoute.patients(),
          icon: 'users',
          label: 'Lista de Pacientes'
        },
        {
          title: 'Insumos',
          route: TransfusionAgencyRoute.supplies(),
          icon: 'pills',
          label: 'Material Transfusional'
        }
      ],
      footer: [
        {
          title: 'Configurações',
          route: TransfusionAgencyRoute.support(),
          icon: 'envelope',
          label: 'Suporte'
        },
        {
          route: TransfusionAgencyRoute.profile(),
          icon: 'address-card',
          label: 'Perfil'
        },
      ]
    }
  })
})
