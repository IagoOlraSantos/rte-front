import { inject } from 'vue'
import { GatewayProvider } from '../../infra/gateway/provider'
import { throwInjectError } from '../../services/errors/inject-error'

export function useHospitalGateway () {
  const hospitalGateway = inject(GatewayProvider.hospitalGateway)

  if (!hospitalGateway) {
    throwInjectError('HospitalGateway')
  }

  return hospitalGateway
}
