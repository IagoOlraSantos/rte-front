<script setup lang="ts">
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'
import AppContent from './AppContent.vue'
import { useAppSidebar } from '../../../services/composables'

defineOptions({
  name: 'AppLayoutPrivate'
})

const { toggle, isOpen } = useAppSidebar()
</script>

<template>
  <section class="app-layout">
    <slot name="sidebar">
      <AppSidebar class="app-sidebar" :is-open="isOpen" @toggle="toggle" />
    </slot>

    <slot name="header">
      <AppHeader class="app-header" @toggle="toggle" />
    </slot>

    <AppContent class="app-content">
      <slot></slot>
    </AppContent>
  </section>
</template>

<style lang="scss">
.app-layout {
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: auto 1fr 1fr 1fr;
  grid-template-areas:
    'app-sidebar app-header app-header app-header'
    'app-sidebar app-content app-content app-content'
    'app-sidebar app-content app-content app-content'
    'app-sidebar app-content app-content app-content';
  height: 100dvh;
  position: relative;
}

.app-header {
  grid-area: app-header;
}

.app-sidebar {
  grid-area: app-sidebar;
}

.app-content {
  grid-area: app-content;
}
</style>
