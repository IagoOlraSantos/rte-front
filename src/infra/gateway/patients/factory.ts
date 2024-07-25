import PatientGatewayHttp from './gateway'
import { axiosClientFactory } from '../../http/adapter/axios/factory'

export function patientGateway() {
  const httpClient = axiosClientFactory()
  return new PatientGatewayHttp(httpClient)
}
