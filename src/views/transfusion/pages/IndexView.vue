<script setup lang="ts">
import AppLayout from '@/components/ui/layouts/AppLayout.vue'
import AppPageContainer from '@/components/ui/page/AppPageContainer.vue'
import AppPageTitle from '@/components/ui/page/AppPageTitle.vue'
import AppBreadcrumb from '@/components/ui/breadcrumb/AppBreadcrumb.vue'
import { provideGlobalState } from '@/services/composables'
import { useTransfusion } from '../stores'

const app = useTransfusion();

provideGlobalState(app)
</script>

<template>
  <AppLayout>
    <AppPageContainer>
      <AppPageTitle>
        <AppBreadcrumb />
      </AppPageTitle>
      <RouterView />
    </AppPageContainer>
  </AppLayout>
</template>
