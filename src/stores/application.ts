import { defineStore } from 'pinia'
import Department from '@/models/Department'

export type ApplicationType = {
  department: Department | null;
}

export const useApp = defineStore('application', {
  state: (): ApplicationType => {
    return {
      department: null,
    }
  },
  actions: {
    setDepartment(department: Department) {
      this.department = department;
    }
  }
})
