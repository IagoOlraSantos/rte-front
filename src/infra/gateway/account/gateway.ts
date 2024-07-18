import type HttpClient from '../../http/HttpClient'
import type { AccountGateway, LoginParams } from './types'
import Account from '@/models/Account'

export default class AccountGatewayHttp implements AccountGateway {
  constructor(private readonly http: HttpClient) {}

  async login(params: LoginParams) {
    return this.http
      .post('/sessions', {
        email: params.email,
        password: params.password
      })
      .then((response: any) => {
        return new Account({
          token: response.data.token,
          user: response.data.user
        })
      })
  }

  async logout() {
      await this.http.post('/logout')
  }

  async ping() {
    return this.http.patch('/ping')
  }

  async sendTwoFactorCode(): Promise<void> {
    await this.http
      .post('/send-two-factor')
  }

  async verifyTwoFactorCode(code: string): Promise<void> {
    await this.http
      .post('/verify-two-factor', {
        code,
      })
  }
}
