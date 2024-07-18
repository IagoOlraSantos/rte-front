import type { InjectionKey } from 'vue'
import type { AccountGateway } from './account/types'
import type { HospitalGateway } from './hospital/types'
import type { AgencyGateway } from './agency/types'

export const GatewayProvider = {
  accountGateway: Symbol() as InjectionKey<AccountGateway>,
  hospitalGateway: Symbol() as InjectionKey<HospitalGateway>,
  agencyGateway: Symbol() as InjectionKey<AgencyGateway>,
}
