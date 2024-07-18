import { AppRoute } from '@/router/provider/app-routes'
import { chatRouteName } from '../pages/chat/route'
import { dashboardRouteName } from '../pages/dashboard/route'
import { patientListRouteName } from '../pages/patients/list/route'
import { profileRouteName } from '../pages/profile/route'
import { rtsListRouteName } from '../pages/rts/list/route'
import { rtsListFinishedRouteName } from '../pages/rts/list-finished/route'
import { suppliesRouteName } from '../pages/supplies/route'
import { supportRouteName } from '../pages/support/route'

export class TransfusionAgencyPage {
  static readonly chat = chatRouteName;
  static readonly dashboard = dashboardRouteName;
  static readonly patients = patientListRouteName;
  static readonly profile = profileRouteName;
  static readonly rts = rtsListRouteName;
  static readonly rtsFinished = rtsListFinishedRouteName;
  static readonly supplies = suppliesRouteName;
  static readonly support = supportRouteName;
}

export class TransfusionAgencyRoute extends AppRoute {
  static chat() {
    return this.getRoute(TransfusionAgencyPage.chat)
  };
  static dashboard() {
    return this.getRoute(TransfusionAgencyPage.dashboard)
  };
  static patients() {
    return this.getRoute(TransfusionAgencyPage.patients)
  };
  static profile() {
    return this.getRoute(TransfusionAgencyPage.profile)
  };
  static rts() {
    return this.getRoute(TransfusionAgencyPage.rts)
  };
  static rtsFinished() {
    return this.getRoute(TransfusionAgencyPage.rtsFinished)
  };
  static supplies() {
    return this.getRoute(TransfusionAgencyPage.supplies)
  };
  static support() {
    return this.getRoute(TransfusionAgencyPage.support)
  };
}
