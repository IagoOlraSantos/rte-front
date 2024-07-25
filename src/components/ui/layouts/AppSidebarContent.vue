<script setup lang="ts">
import AppSidebarSectionTitle from './AppSidebarSectionTitle.vue'
import AppSidebarMenuListItem from './AppSidebarMenuListItem.vue'
import AppSidebarMenuItem from './AppSidebarMenuItem.vue'
import AppSidebarMenu from './AppSidebarMenu.vue'
import { useGlobalState } from '@/services/composables'
defineOptions({
  name: 'AppSidebarContent'
})

const emit = defineEmits(['close-sidebar'])
const app = useGlobalState();

const onChangeRoute = () => {
  emit('close-sidebar')
}
</script>

<template>
  <AppSidebarMenuListItem scroll>
    <template v-for="(menu, index) in app.appMenu.content" :key="index">
      <AppSidebarSectionTitle v-if="menu.title">{{ menu.title }}</AppSidebarSectionTitle>
      <AppSidebarMenuItem :route="menu.route" @close-sidebar="onChangeRoute">
        <AppSidebarMenu :icon="menu.icon" :label="menu.label" :counter="menu.badge"  />
      </AppSidebarMenuItem>
    </template>
  </AppSidebarMenuListItem>
</template>
