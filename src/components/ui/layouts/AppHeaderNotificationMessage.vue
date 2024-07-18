<script setup lang="ts">
import AppNotificationButton from '../button/AppNotificationButton.vue'
import AppOverlayBadge from '../badge/AppOverlayBadge.vue'
import AppIcon from '../icons/AppIcon.vue'

defineOptions({
  name: 'AppHeaderNotificationMessage',
})
</script>

<template>
  <AppOverlayBadge class="app-notification-message" :value="0">
    <AppNotificationButton >
      <AppIcon name="message" size="xl" />
    </AppNotificationButton>
  </AppOverlayBadge>

</template>

<style lang="scss" scoped>
.app-notification-message {
  @include responsive('mobile-landscape') {
    display: none !important;
  }
}
</style>

