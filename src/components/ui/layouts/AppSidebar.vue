<script setup lang="ts">
import { computed } from 'vue'
import AppOverlay from '../overlay/AppOverlay.vue'
import AppChevronLeftButton from '../button/AppChevronLeftButton.vue'
import AppSidebarHeader from './AppSidebarHeader.vue'
import AppSidebarContent from './AppSidebarContent.vue'
import AppSidebarFooter from './AppSidebarFooter.vue'

defineOptions({
  name: 'AppSidebar'
})

const props = defineProps({
  isOpen: {
    required: true,
    default: false
  }
})

const classes = computed(() => {
  return {
    'app-sidebar': true,
    'app-sidebar--close': !props.isOpen
  }
})

const emit = defineEmits(['toggle'])
</script>

<template>
  <aside :class="classes">
    <AppChevronLeftButton class="app-sidebar__btn" @click="emit('toggle')" />
    <nav class="app-sidebar__nav">
      <AppSidebarHeader @toggle="emit('toggle')"/>
      <AppSidebarContent />
      <AppSidebarFooter />
    </nav>
  </aside>

  <AppOverlay :visible="props.isOpen" responsive @toggle="emit('toggle', false)" />
</template>

<style scoped lang="scss">
.app-sidebar {
  @include responsive('tablet') {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: var(--size-324);
  }

  @include responsive('mobile') {
    width: 100vw;
    overflow-x: hidden;
  }

  position: relative;
  z-index: var(--z-10);
  background: var(--color-bg-sidebar);
  width: var(--size-280);
  transition: var(--transition-width);

  &--close {
    width: 0;

    .app-sidebar__btn {
      transform: var(--rotate-180);

      &:hover {
        right: -32px;
      }
    }
  }

  &__btn {
    @include responsive('tablet') {
      display: none;
    }

    position: absolute;
    top: var(--size-24);
    right: var(--size-24-);
    width: var(--size-40);
    z-index: var(--z-11);
    color: var(--color-toggle-icon);
    transition: all 200ms ease;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow-x: hidden;
  }
}
</style>
