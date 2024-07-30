import type HttpClient from '../../http/HttpClient'
import type { BrasilGateway } from './types'

export default class BrasilGatewayHttp implements BrasilGateway {
  constructor(private readonly http: HttpClient) {}

  async findStates(): Promise<any[]> {
    return this.http.get('/states').then((response: any) => {
      return response.data
    })
  }

  async findCities(): Promise<any[]> {
    return this.http.get('/cities').then((response: any) => {
      return response.data
    })
  }

  async findCep(cep: string): Promise<any[]> {
    return this.http.get(`/cep/${cep}`).then((response: any) => {
      return response.data
    })
  }
}
