import { inject } from 'vue'
import { GatewayProvider } from '../../infra/gateway/provider'
import { throwInjectError } from '../../services/errors/inject-error'

export function useAgencyGateway () {
  const agencyGateway = inject(GatewayProvider.agencyGateway)

  if (!agencyGateway) {
    throwInjectError('AgencyGateway')
  }

  return agencyGateway
}
