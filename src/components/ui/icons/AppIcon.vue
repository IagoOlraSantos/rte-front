<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconName } from '@fortawesome/fontawesome-common-types'
import {
  faChevronLeft,
  faBars,
  faXmark,
  faSearch,
  faEnvelope,
  faAddressCard,
  faSquarePollVertical,
  faClipboardList,
  faCheckDouble,
  faUsers,
  faPills,
  faMessage,
  faBell,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import { computed } from 'vue'

defineOptions({
  name: 'AppIcon',
})

type Size =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'lg'
  | 'xl'
  | '2xl'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x'
  | undefined

type AppIconProps = {
  name: IconName
  rotation?: any
  size?: Size
}

const props = withDefaults(defineProps<AppIconProps>(), {
  size: 'lg'
})

const icon = computed(() => {
  const map: { [key: string]: any } = {
    'chevron-left': faChevronLeft,
    bars: faBars,
    close: faXmark,
    search: faSearch,
    message: faMessage,
    envelope: faEnvelope,
    'address-card': faAddressCard,
    bell: faBell,
    'square-poll-vertical': faSquarePollVertical,
    'clipboard-list': faClipboardList,
    'check-double': faCheckDouble,
    users: faUsers,
    pills: faPills,
    'right-from-bracket': faRightFromBracket,
  }
  return map[props.name]
})
</script>

<template>
  <FontAwesomeIcon :icon="icon" :size="size" :rotation="props.rotation" />
</template>
