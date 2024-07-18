import type HttpClient from '../../http/HttpClient'
import type { AgencyGateway } from './types'
import Agency from '@/models/Agency'

export default class AgencyGatewayHttp implements AgencyGateway {
  constructor(private readonly http: HttpClient) {}

  async findAll() {
    return this.http
      .get('/agencies')
      .then((response: any) => {
        console.log('agencies', response)
        return response.data.agencies.map((agency: any) => new Agency(agency))
      })
  }
}
