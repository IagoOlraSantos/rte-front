import AgencyGatewayHttp from './gateway'
import { axiosClientFactory } from '../../http/adapter/axios/factory'

export function agencyGateway() {
  const httpClient = axiosClientFactory()
  return new AgencyGatewayHttp(httpClient)
}
