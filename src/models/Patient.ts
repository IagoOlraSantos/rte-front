import Entity, { type EntityProps } from '../models/shared/Entity'
import dayjs from 'dayjs'

export interface PatientProps extends EntityProps {
  name: string
  last_name: string
  gender: string
  cpf: number
  pf: number
  born_date: string
  mothers_name: string
  fathers_name: string
  mobile_phone: number
}

export default class Patient extends Entity<Patient, PatientProps> {
  name: string
  mothers_name: string;
  prontuary: number;
  cpf: number;
  pf: number;
  born_date: string;

  constructor(props: PatientProps) {
    super(props)
    this.name = `${props.name} ${props.last_name}`
    this.mothers_name = props.mothers_name
    this.prontuary = props.pf
    this.cpf = props.cpf
    this.pf = props.pf
    this.born_date = dayjs(props.born_date).locale('pt-BR').format('DD/MM/YYYY')
  }
}
