import { useRoute } from 'vue-router'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

type Breadcrumb = {
  path: string
  breadcrumb: string
}

type UseBreadcrumb = {
  breadcrumbs: ComputedRef<Breadcrumb[]>
}

export default function useBreadcrumb(): UseBreadcrumb {
  const route = useRoute()

  const breadcrumbs = computed(() => {
    const matchedRoutes = route.matched
    return matchedRoutes.map((r, index) => {
      return {
        path: r.path,
        breadcrumb: r.meta.breadcrumb || ''
      }
    })
  })

  return {
    breadcrumbs
  }
}
