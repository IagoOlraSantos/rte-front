import type Account from '@/models/Account'

export type LoginParams = {
  email: string;
  password: string
}

export interface AccountGateway {
  login(params: LoginParams): Promise<Account>
  logout():Promise<void>
  ping(): Promise<any>
  sendTwoFactorCode(): Promise<void>
  verifyTwoFactorCode(code: string): Promise<void>
}
