import type { IconName } from '@fortawesome/fontawesome-common-types'
import type { IRoute } from '@/router/provider/app-routes'

type MenuItem = {
  title?: string
  label: string
  icon: IconName
  route: IRoute
  badge?: number
}

export interface GlobalState {
  context: string;
  appName: string;
  appDepartment: string;
  appVersion: string;
  appMenu: {
    content: MenuItem[],
    footer: MenuItem[],
  }
}
