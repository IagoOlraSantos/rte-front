<script setup lang="ts">
import AppNotificationButton from '../button/AppNotificationButton.vue'
import AppIcon from '../icons/AppIcon.vue'
import AppOverlayBadge from '../badge/AppOverlayBadge.vue'
defineOptions({
  name: 'AppHeaderNotificationInfo'
})
</script>

<template>
  <AppOverlayBadge :value="0">
    <AppNotificationButton>
      <AppIcon name="bell" size="xl" />
    </AppNotificationButton>
  </AppOverlayBadge>
</template>
