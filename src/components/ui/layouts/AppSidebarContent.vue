<script setup lang="ts">
import AppSidebarSectionTitle from './AppSidebarSectionTitle.vue'
import AppSidebarMenuListItem from './AppSidebarMenuListItem.vue'
import AppSidebarMenuItem from './AppSidebarMenuItem.vue'
import AppSidebarMenu from './AppSidebarMenu.vue'
import { useGlobalState } from '@/services/composables'
defineOptions({
  name: 'AppSidebarContent'
})

const app = useGlobalState();
</script>

<template>
  <AppSidebarMenuListItem scroll>
    <template v-for="(menu, index) in app.appMenu.content" :key="index">
      <AppSidebarSectionTitle v-if="menu.title">{{ menu.title }}</AppSidebarSectionTitle>
      <AppSidebarMenuItem :route="menu.route">
        <AppSidebarMenu :icon="menu.icon" :label="menu.label" :counter="menu.badge"  />
      </AppSidebarMenuItem>
    </template>
  </AppSidebarMenuListItem>
</template>
