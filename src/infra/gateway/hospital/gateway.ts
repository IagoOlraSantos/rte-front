import type HttpClient from '../../http/HttpClient'
import type { HospitalGateway } from './types'
import Hospital from '@/models/Hospital'

export default class HospitalGatewayHttp implements HospitalGateway {
  constructor(private readonly http: HttpClient) {}

  async findAll() {
    return this.http
      .get('/hospitals')
      .then((response: any) => {
        return response.data.hospitals.map((hospital: any) => new Hospital(hospital))
      })
  }

  async findAllAreas() {
    return this.http
      .get('/areas')
      .then((response: any) => {
        return response.data.areas;
      })
  }
}
