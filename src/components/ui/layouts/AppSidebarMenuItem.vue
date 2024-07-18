<script setup lang="ts">
import { computed } from 'vue'
import type { IRoute } from '@/router/provider/app-routes'
import { useRoute } from 'vue-router'

type AppSidebarMenuItemProps = {
  active?: boolean
  route: IRoute
}

defineOptions({
  name: 'AppSidebarMenuItem'
})

const currentRouter = useRoute()
const props = withDefaults(defineProps<AppSidebarMenuItemProps>(), {
  active: false
})

const isActive = computed(() => {
  return currentRouter.name === props.route.name
})

const classes = computed(() => {
  return {
    'app-sidebar-menu-item': true,
    'app-sidebar-menu-item--active': isActive.value
  }
})
</script>

<template>
  <router-link v-if="route" :to="route">
    <li :class="classes">
      <slot></slot>
    </li>
  </router-link>

  <li v-else :class="classes">
    <slot></slot>
  </li>
</template>

<style scoped lang="scss">
.app-sidebar-menu-item {
  @include responsive('mobile') {
    border-radius: var(--size-8);
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--size-16);
  padding: var(--size-16);
  border-top-left-radius: var(--size-8);
  border-bottom-left-radius: var(--size-8);
  transition: var(--transition-all-cub);
  cursor: pointer;

  &--active {
    background-color: var(--rte-blue-dark-light);
    box-shadow: var(--shadow-1);
  }

  &:hover {
    background-color: var(--rte-blue-dark-light);
  }

  &:active {
    background-color: var(--rte-blue-dark-light);
    opacity: var(--opacity-90);
  }
}
</style>
