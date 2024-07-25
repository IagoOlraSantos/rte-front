import { inject } from 'vue'
import { GatewayProvider } from '../../infra/gateway/provider'
import { throwInjectError } from '../../services/errors/inject-error'

export function usePatientGateway () {
  const patientGateway = inject(GatewayProvider.patientGateway)

  if (!patientGateway) {
    throwInjectError('PatientGateway')
  }

  return patientGateway
}
