<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'AppSidebarMenuListItem'
})

type AppSidebarMenuListItemProps = {
  scroll?: boolean
}

const props = withDefaults(defineProps<AppSidebarMenuListItemProps>(), {
  scroll: false
})

const classes = computed(() => {
  return {
    'app-sidebar-menu-list-item': true,
    'app-sidebar-menu-list-item--scroll': props.scroll
  }
})
</script>

<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>

<style lang="scss">
.app-sidebar-menu-list-item {
  @include responsive('mobile') {
    padding-right: var(--size-24);
  }
  @include scrollbar();
  scrollbar-gutter: unset;
  &::-webkit-scrollbar-thumb {
    background-color: var(--rte-light-bluish-gray);
  }

  padding: var(--size-24) 0 var(--size-24) var(--size-24);
  width: 100%;
  gap: var(--size-8);
  display: flex;
  flex-direction: column;
  color: var(--rte-white);

  &--scroll {
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
  }
}
</style>
