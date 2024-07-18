import Entity, { type EntityProps } from '../models/shared/Entity'

export interface DepartmentProps extends EntityProps {
  id_manager: string
  name: string
  code: string
  createdAt: string
}

export default class Department extends Entity<Department, DepartmentProps> {
  name: string
  constructor(props: DepartmentProps) {
    super(props)
    this.name = props.name
  }
}
