export type User = {
  id: number
  name: string
  last_name: string
  born_date: string
  gender: string
  cpf: number
  rg: number
  mobile_phone: number
  role: string
  type_professional_document: null | number
  number_professional_document: null | number
  cod_type_user: number
  email: string
  email_verified_at: null
  password: null
  remember_token: null
  failed_login_attempts: number
  verified_code: boolean;
  created_at: string
  updated_at: string
}

export default class Account {
  token: string
  user: User

  constructor(props: { token: string, user: User }) {
    this.token = props.token;
    this.user = props.user;
  }
}
