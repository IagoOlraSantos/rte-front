<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '../icons/AppIcon.vue'
import AppBadge from '../badge/AppBadge.vue'
import type { IconName } from '@fortawesome/fontawesome-common-types'

defineOptions({
  name: 'AppMenuItem'
})

type MenuItemProps = {
  icon?: IconName
  label?: string
  counter?: number
}

const props = withDefaults(defineProps<MenuItemProps>(), {
  icon: 'bell',
  label: 'Label',
  counter: 0
})

const hasCounter = computed(() => {
  return props.counter > 0
})
</script>

<template>
  <AppIcon :name="props.icon"></AppIcon>
  <span class="app-menu-item--label">{{ props.label }}</span>
  <AppBadge v-show="hasCounter" :value="counter" type="square" />
</template>

<style lang="scss" scoped>
.app-menu-item {
  &--label {
    flex: 1;
  }
}
</style>
