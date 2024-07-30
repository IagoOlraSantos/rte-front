import BrasilGatewayHttp from './gateway'
import { axiosClientFactory } from '../../http/adapter/axios/factory'

export function brasilGateway() {
  const httpClient = axiosClientFactory()
  return new BrasilGatewayHttp(httpClient)
}
