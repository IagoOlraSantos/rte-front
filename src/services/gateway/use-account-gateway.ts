import { inject } from 'vue'
import { GatewayProvider } from '../../infra/gateway/provider'
import { throwInjectError } from '../../services/errors/inject-error'

export function useAccountGateway () {
  const accountGateway = inject(GatewayProvider.accountGateway)

  if (!accountGateway) {
    throwInjectError('AccountGateway')
  }

  return accountGateway
}
