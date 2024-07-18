import { AppRoute } from '@/router/provider/app-routes'
import { chatRouteName } from '../pages/chat/route'
import { dashboardRouteName } from '../pages/dashboard/route'
import { profileRouteName } from '../pages/profile/route'
import { rtsListRouteName } from '../pages/rts/list/route'
import { rtsListFinishedRouteName } from '../pages/rts/list-finished/route'
import { suppliesRouteName } from '../pages/supplies/route'
import { supportRouteName } from '../pages/support/route'

export class FinancialManagementPage {
  static readonly chat = chatRouteName;
  static readonly dashboard = dashboardRouteName;
  static readonly profile = profileRouteName;
  static readonly rts = rtsListRouteName;
  static readonly rtsFinished = rtsListFinishedRouteName;
  static readonly supplies = suppliesRouteName;
  static readonly support = supportRouteName;
}

export class FinancialManagementRoute extends AppRoute {
  static chat() {
    return this.getRoute(FinancialManagementPage.chat)
  };
  static dashboard() {
    return this.getRoute(FinancialManagementPage.dashboard)
  };
  static profile() {
    return this.getRoute(FinancialManagementPage.profile)
  };
  static rts() {
    return this.getRoute(FinancialManagementPage.rts)
  };
  static rtsFinished() {
    return this.getRoute(FinancialManagementPage.rtsFinished)
  };
  static supplies() {
    return this.getRoute(FinancialManagementPage.supplies)
  };
  static support() {
    return this.getRoute(FinancialManagementPage.support)
  };
}
