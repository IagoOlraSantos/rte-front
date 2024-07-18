import { AppRoute } from '@/router/provider/app-routes'
import { chatRouteName } from '../pages/chat/route'
import { dashboardRouteName } from '../pages/dashboard/route'
import { profileRouteName } from '../pages/profile/route'
import { rtsListRouteName } from '../pages/rts/list/route'
import { rtsListFinishedRouteName } from '../pages/rts/list-finished/route'
import { suppliesRouteName } from '../pages/supplies/route'
import { supportRouteName } from '../pages/support/route'

export class HospitalManagementPage {
  static readonly chat = chatRouteName;
  static readonly dashboard = dashboardRouteName;
  static readonly profile = profileRouteName;
  static readonly rts = rtsListRouteName;
  static readonly rtsFinished = rtsListFinishedRouteName;
  static readonly supplies = suppliesRouteName;
  static readonly support = supportRouteName;
}

export class HospitalManagementRoute extends AppRoute {
  static chat() {
    return this.getRoute(HospitalManagementPage.chat)
  };
  static dashboard() {
    return this.getRoute(HospitalManagementPage.dashboard)
  };
  static profile() {
    return this.getRoute(HospitalManagementPage.profile)
  };
  static rts() {
    return this.getRoute(HospitalManagementPage.rts)
  };
  static rtsFinished() {
    return this.getRoute(HospitalManagementPage.rtsFinished)
  };
  static supplies() {
    return this.getRoute(HospitalManagementPage.supplies)
  };
  static support() {
    return this.getRoute(HospitalManagementPage.support)
  };
}
