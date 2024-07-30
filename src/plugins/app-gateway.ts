import type { App, ObjectPlugin } from 'vue'
import { GatewayProvider } from '../infra/gateway/provider'
import { accountGateway } from '../infra/gateway/account/factory'
import { agencyGateway } from '../infra/gateway/agency/factory'
import { hospitalGateway } from '../infra/gateway/hospital/factory'
import { patientGateway } from '../infra/gateway/patients/factory'
import { brasilGateway } from '../infra/gateway/brasil/factory'

const AppGatewayPlugin: ObjectPlugin = {
  install(app: App) {
    app.provide(GatewayProvider.accountGateway, accountGateway())
    app.provide(GatewayProvider.agencyGateway, agencyGateway())
    app.provide(GatewayProvider.hospitalGateway, hospitalGateway())
    app.provide(GatewayProvider.patientGateway, patientGateway())
    app.provide(GatewayProvider.brasilGateway, brasilGateway())
  }
}

export default AppGatewayPlugin
