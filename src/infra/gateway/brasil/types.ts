export interface BrasilGateway {
  findStates(): Promise<any[]>
  findCities(): Promise<any[]>
  findCep(cep: string): Promise<any>
}
