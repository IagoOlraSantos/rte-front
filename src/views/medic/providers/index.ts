import { AppRoute } from '@/router/provider/app-routes'
import { chatRouteName } from '../pages/chat/route'
import { dashboardRouteName } from '../pages/dashboard/route'
import { patientCreateRouteName } from '../pages/patients/create/route'
import { patientListRouteName } from '../pages/patients/list/route'
import { profileRouteName } from '../pages/profile/route'
import { rtsListRouteName } from '../pages/rts/list/route'
import { rtsListFinishedRouteName } from '../pages/rts/list-finished/route'
import { suppliesRouteName } from '../pages/supplies/route'
import { supportRouteName } from '../pages/support/route'

export class MedicPage {
  static readonly chat = chatRouteName;
  static readonly dashboard = dashboardRouteName;
  static readonly patientCreate = patientCreateRouteName;
  static readonly patients = patientListRouteName;
  static readonly profile = profileRouteName;
  static readonly rts = rtsListRouteName;
  static readonly rtsFinished = rtsListFinishedRouteName;
  static readonly supplies = suppliesRouteName;
  static readonly support = supportRouteName;
}

export class MedicRoute extends AppRoute {
  static chat() {
    return this.getRoute(MedicPage.chat)
  };
  static dashboard() {
    return this.getRoute(MedicPage.dashboard)
  };
  static patientCreate() {
    return this.getRoute(MedicPage.patientCreate)
  };
  static patients() {
    return this.getRoute(MedicPage.patients)
  };
  static profile() {
    return this.getRoute(MedicPage.profile)
  };
  static rts() {
    return this.getRoute(MedicPage.rts)
  };
  static rtsFinished() {
    return this.getRoute(MedicPage.rtsFinished)
  };
  static supplies() {
    return this.getRoute(MedicPage.supplies)
  };
  static support() {
    return this.getRoute(MedicPage.support)
  };
}
