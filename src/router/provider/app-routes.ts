import { AppPages } from './app-pages'
import type { RouteLocationRaw } from 'vue-router'

type AuthRouteParams = {
  token: string
  hospital: number
  area: number
}

export type IRoute = RouteLocationRaw & {
  name: string
  params: any
  query: any
}

type IRouteParams = {
  params?: any,
  query?: any
}

function getRoute(name: string, params?: IRouteParams): IRoute {
  return {
    name,
    params: params?.params,
    query: params?.query
  }
}

export class AppRoutes {
  static notFound() {
    return getRoute(AppPages.notFound, {})
  }
  static login() {
    return getRoute(AppPages.login, {})
  }
  static area() {
    return getRoute(AppPages.area, {})
  }
  static twoFactor() {
    return getRoute(AppPages.twoFactor, {})
  }
  static financialManagement(params: AuthRouteParams) {
    return getRoute(AppPages.financialManagement, {
      query: {
        token: params.token,
        hospital: params.hospital,
        area: params.area
      }
    })
  }
  static hospitalManagement(params: AuthRouteParams) {
    return getRoute(AppPages.hospitalManagement, {
      query: {
        token: params.token,
        hospital: params.hospital,
        area: params.area
      }
    })
  }
  static medic(params: AuthRouteParams) {
    return getRoute(AppPages.medic, {
      query: {
        token: params.token,
        hospital: params.hospital,
        area: params.area
      }
    })
  }
  static transfusion(params: AuthRouteParams) {
    return getRoute(AppPages.transfusion, {
      query: {
        token: params.token,
        hospital: params.hospital,
        area: params.area
      }
    })
  }
  static transfusionAgency(params: AuthRouteParams) {
    return getRoute(AppPages.transfusionAgency, {
      query: {
        token: params.token,
        hospital: params.hospital,
        area: params.area
      }
    })
  }
  static triagem(params: AuthRouteParams) {
    return getRoute(AppPages.triagem, {
      query: {
        token: params.token,
        hospital: params.hospital,
        area: params.area
      }
    })
  }
}

export abstract class AppRoute {
  static getRoute(name: string, params?: IRouteParams): IRoute {
    return {
      name,
      params: params?.params,
      query: params?.query
    }
  }
}
