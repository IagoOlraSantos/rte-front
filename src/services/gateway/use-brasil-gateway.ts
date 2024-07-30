import { inject } from 'vue'
import { GatewayProvider } from '../../infra/gateway/provider'
import { throwInjectError } from '../../services/errors/inject-error'

export function useBrasilGateway () {
  const brasilGateway = inject(GatewayProvider.brasilGateway)

  if (!brasilGateway) {
    throwInjectError('BrasilGateway')
  }

  return brasilGateway
}
