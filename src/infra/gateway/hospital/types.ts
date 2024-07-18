import type Hospital from '@/models/Hospital'

export interface HospitalGateway {
  findAll(): Promise<Hospital[]>
  findAllAreas(): Promise<{ id: number, name: string }[]>
}
