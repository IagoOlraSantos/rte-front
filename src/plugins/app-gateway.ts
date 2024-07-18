import type { App, ObjectPlugin } from 'vue'
import { GatewayProvider } from '../infra/gateway/provider'
import { accountGateway } from '../infra/gateway/account/factory'
import { agencyGateway } from '../infra/gateway/agency/factory'
import { hospitalGateway } from '../infra/gateway/hospital/factory'

const AppGatewayPlugin: ObjectPlugin = {
  install(app: App) {
    app.provide(GatewayProvider.accountGateway, accountGateway())
    app.provide(GatewayProvider.agencyGateway, agencyGateway())
    app.provide(GatewayProvider.hospitalGateway, hospitalGateway())
  }
}

export default AppGatewayPlugin
