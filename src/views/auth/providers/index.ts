import { AppRoute } from '@/router/provider/app-routes'
import { areaRouteName } from '../pages/area/route'
import { loginRouteName } from '../pages/login/route'
import { registerRouteName } from '../pages/register/route'
import { twoFactorRouteName } from '../pages/two-factor/route'

export class AuthPage {
  static readonly area = areaRouteName;
  static readonly login = loginRouteName;
  static readonly register = registerRouteName;
  static readonly twoFactor = twoFactorRouteName;
}

export class AuthRoute extends AppRoute {
  static area() {
    return this.getRoute(AuthPage.area)
  };
  static login() {
    return this.getRoute(AuthPage.login)
  };
  static register() {
    return this.getRoute(AuthPage.register)
  };
  static twoFactor() {
    return this.getRoute(AuthPage.twoFactor)
  };
}
