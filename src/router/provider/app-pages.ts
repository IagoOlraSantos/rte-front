import { notFoundRouteName } from '../routes/error'

import { areaRouteName } from '../../views/auth/pages/area/route'
import { loginRouteName } from '../../views/auth/pages/login/route'
import { registerRouteName } from '../../views/auth/pages/register/route'
import { twoFactorRouteName } from '../../views/auth/pages/two-factor/route'

import { financialManagementRouteName } from '../../views/financial-management/routes'
import { hospitalManagementRouteName } from '../../views/hospital-management/routes'
import { medicRouteName } from '../../views/medic/routes'
import { transfusionRouteName } from '../../views/transfusion/routes'
import { transfusionAgencyRouteName } from '../../views/transfusion-agency/routes'
import { triagemRouteName } from '../../views/triagem/routes'

export const AppPages = {
  notFound: notFoundRouteName,
  login: loginRouteName,
  register: registerRouteName,
  area: areaRouteName,
  twoFactor: twoFactorRouteName,
  financialManagement: financialManagementRouteName,
  hospitalManagement: hospitalManagementRouteName,
  medic: medicRouteName,
  transfusion: transfusionRouteName,
  transfusionAgency: transfusionAgencyRouteName,
  triagem: triagemRouteName,
}
