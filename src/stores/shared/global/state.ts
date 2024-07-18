import type { IconName } from '@fortawesome/fontawesome-common-types'

type MenuItem = {
  title?: string
  label: string
  icon: IconName
  route: object
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
