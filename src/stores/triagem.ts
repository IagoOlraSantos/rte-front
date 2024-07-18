import { defineStore } from 'pinia'
import type { GlobalState } from './shared/global'

interface TriagemState extends GlobalState {}

export const moduleName = 'triagem'

export const useTriagem = defineStore(moduleName, {
  state: (): TriagemState => ({
    context: moduleName,
    appName: 'RTE',
    appDepartment: 'Triagem',
    appVersion: '1.0.0',
    appMenu: {
      content: [
        {
          title: 'Home',
          route: {},
          icon: 'square-poll-vertical',
          label: 'Dashboard'
        },
        {
          route: {},
          icon: 'message',
          label: 'Chat'
        },
        {
          title: 'Solicitações',
          route: {},
          icon: 'clipboard-list',
          label: 'Lista de RTs'
        },
        {
          route: {},
          icon: 'check-double',
          label: 'RTs Concluídas'
        },
        {
          title: 'Pacientes',
          route: {},
          icon: 'users',
          label: 'Lista de Pacientes'
        },
        {
          title: 'Insumos',
          route: {},
          icon: 'pills',
          label: 'Material Transfusional'
        }
      ],
      footer: [
        {
          title: 'Configurações',
          route: {},
          icon: 'envelope',
          label: 'Suporte'
        },
        {
          route: {},
          icon: 'address-card',
          label: 'Perfil'
        },
      ]
    }
  })
})
