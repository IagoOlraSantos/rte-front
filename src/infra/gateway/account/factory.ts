import AccountGatewayHttp from './gateway'
import { axiosClientFactory } from '../../http/adapter/axios/factory'

export function accountGateway() {
  const httpClient = axiosClientFactory()
  return new AccountGatewayHttp(httpClient)
}
