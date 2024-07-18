<script setup lang="ts">
import AppHeaderNotificationMessage from './AppHeaderNotificationMessage.vue'
import AppHeaderNotificationInfo from './AppHeaderNotificationInfo.vue'

defineOptions({
  name: 'AppHeaderNotification'
})
</script>

<template>
  <div class="app-notification">
    <AppHeaderNotificationMessage />
    <AppHeaderNotificationInfo />
  </div>
</template>

<style scoped lang="scss">
.app-notification {
  @include responsive('tablet') {
    gap: var(--size-12);
  }

  @include responsive('mobile-landscape') {
    gap: 0;
  }

  display: flex;
  flex-direction: row;
  gap: var(--size-24);
}
</style>
