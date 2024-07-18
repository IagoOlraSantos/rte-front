import HospitalGatewayHttp from './gateway'
import { axiosClientFactory } from '../../http/adapter/axios/factory'

export function hospitalGateway() {
  const httpClient = axiosClientFactory()
  return new HospitalGatewayHttp(httpClient)
}
