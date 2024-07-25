import type { InjectionKey } from 'vue'
import type { AccountGateway } from './account/types'
import type { AgencyGateway } from './agency/types'
import type { HospitalGateway } from './hospital/types'
import type { PatientGateway } from './patients/types'

export const GatewayProvider = {
  accountGateway: Symbol() as InjectionKey<AccountGateway>,
  agencyGateway: Symbol() as InjectionKey<AgencyGateway>,
  hospitalGateway: Symbol() as InjectionKey<HospitalGateway>,
  patientGateway: Symbol() as InjectionKey<PatientGateway>,
}
