import Patient from '@/models/Patient'
import type { PatientProps} from '@/models/Patient'

export type CreatePatientParams = Omit<PatientProps, 'id' | 'born_date'> & {
  born_date: Date
};

export interface PatientGateway {
  findAll(): Promise<Patient[]>
  registerPatient(params: CreatePatientParams): Promise<Patient>
}
