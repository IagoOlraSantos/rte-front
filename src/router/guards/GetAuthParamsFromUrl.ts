import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useTokenStorage, useHospitalStorage, useAreaStorage } from '../../services/storage'

export const getAuthParamsFromUrl = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const data: any[] = []

  if (to.query.token) {
    const tokenStorage = useTokenStorage()
    tokenStorage.setToken(to.query.token.toString())
    data.push(to.query.token)
  }

  if (to.query.hospital) {
    const hospitalStorage = useHospitalStorage()
    hospitalStorage.setHospital(+to.query.hospital)
    data.push(to.query.hospital)
  }

  if (to.query.area) {
    const areaStorage = useAreaStorage()
    areaStorage.setArea(+to.query.area)
    data.push(to.query.area)
  }

  if (data.length > 0) {
    next({ ...to, query: {} })
  } else {
    next()
  }
}
