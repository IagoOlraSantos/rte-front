import type HttpClient from '../../http/HttpClient'
import type { PatientGateway, CreatePatientParams } from './types'
import Patient from '@/models/Patient'

export default class PatientGatewayHttp implements PatientGateway {
  constructor(private readonly http: HttpClient) {}

  async findAll() {
    return this.http.get('/patients').then((response: any) => {
      return response.data.map((hospital: any) => new Patient(hospital))
    })
  }

  async registerPatient(params: CreatePatientParams): Promise<Patient> {
    return this.http.post('/patients', params).then((response: any) => {
      return new Patient(response.data)
    })
  }
}
