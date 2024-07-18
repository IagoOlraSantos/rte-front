import Entity, { type EntityProps } from '../models/shared/Entity'

export interface AgencyProps extends EntityProps {
  id_manager: string
  name: string
  code: string
  createdAt: string
}

export default class Agency extends Entity<Agency, AgencyProps> {
  name: string
  constructor(props: AgencyProps) {
    super(props)
    this.name = props.name
  }
}
