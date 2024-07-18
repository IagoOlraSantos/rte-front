import Entity, { type EntityProps } from '../models/shared/Entity'

export interface HospitalProps extends EntityProps {
  cnes: number
  name: string
  agency_id: number
  type_care: string
  covenants: string
  initials: string
  code: string
}

export default class Hospital extends Entity<Hospital, HospitalProps> {
  name: string
  constructor(props: HospitalProps) {
    super(props)
    this.name = props.name
  }
}
