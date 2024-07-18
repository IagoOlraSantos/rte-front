import type Agency from '@/models/Agency'

export interface AgencyGateway {
  findAll(): Promise<Agency[]>
}
