import { defineStore } from 'pinia'
import type { GlobalState } from '@/stores/shared/global'
import { FinancialManagementRoute } from '../providers'

interface FinancialManagementState extends GlobalState {}

export const moduleName = 'financial-management'

export const useFinancialManagement = defineStore(moduleName, {
  state: (): FinancialManagementState => ({
    context: moduleName,
    appName: 'RTE',
    appDepartment: 'Gestão Financeira',
    appVersion: '1.0.0',
    appMenu: {
      content: [
        {
          title: 'Home',
          route: FinancialManagementRoute.dashboard(),
          icon: 'square-poll-vertical',
          label: 'Dashboard'
        },
        {
          route: FinancialManagementRoute.chat(),
          icon: 'message',
          label: 'Chat'
        },
        {
          title: 'Solicitações',
          route: FinancialManagementRoute.rts(),
          icon: 'clipboard-list',
          label: 'Lista de RTs'
        },
        {
          route: FinancialManagementRoute.rtsFinished(),
          icon: 'check-double',
          label: 'RTs Concluídas'
        },
        {
          title: 'Insumos',
          route: FinancialManagementRoute.supplies(),
          icon: 'pills',
          label: 'Material Transfusional'
        }
      ],
      footer: [
        {
          title: 'Configurações',
          route: FinancialManagementRoute.support(),
          icon: 'envelope',
          label: 'Suporte'
        },
        {
          route: FinancialManagementRoute.profile(),
          icon: 'address-card',
          label: 'Perfil'
        },
      ]
    }
  })
})
