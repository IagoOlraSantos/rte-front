import { defineStore } from 'pinia'
import type { GlobalState } from '@/stores/shared/global'
import { TriagemRoute } from '../providers'

interface TriagemState extends GlobalState {}

export const moduleName = 'triagem'

export const useTriagem = defineStore(moduleName, {
  state: ():TriagemState => ({
    context: moduleName,
    appName: 'RTE',
    appDepartment: 'Triagem',
    appVersion: '1.0.0',
    appMenu: {
      content: [
        {
          title: 'Home',
          route: TriagemRoute.dashboard(),
          icon: 'square-poll-vertical',
          label: 'Dashboard'
        },
        {
          route: TriagemRoute.chat(),
          icon: 'message',
          label: 'Chat'
        },
        {
          title: 'Solicitações',
          route: TriagemRoute.rts(),
          icon: 'clipboard-list',
          label: 'Lista de RTs'
        },
        {
          route: TriagemRoute.rtsFinished(),
          icon: 'check-double',
          label: 'RTs Concluídas'
        },
        {
          title: 'Pacientes',
          route: TriagemRoute.patients(),
          icon: 'users',
          label: 'Lista de Pacientes'
        },
        {
          title: 'Insumos',
          route: TriagemRoute.supplies(),
          icon: 'pills',
          label: 'Material Transfusional'
        }
      ],
      footer: [
        {
          title: 'Configurações',
          route: TriagemRoute.support(),
          icon: 'envelope',
          label: 'Suporte'
        },
        {
          route: TriagemRoute.profile(),
          icon: 'address-card',
          label: 'Perfil'
        },
      ]
    }
  })
})
