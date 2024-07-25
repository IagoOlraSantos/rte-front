<script setup lang="ts">
import AppHeaderProfile from './AppHeaderProfile.vue'
import AppHeaderNotification from './AppHeaderNotification.vue'
import AppBurgerButton from '../button/AppBurgerButton.vue'
import InputSearch from '../form/InputSearch.vue'
</script>

<template>
  <header class="app-header">
    <AppBurgerButton class="app-header__burger" @click="$emit('toggle')" />
    <InputSearch class="app-header__search" />
    <AppHeaderNotification />
    <AppHeaderProfile />
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  @include responsive('tablet') {
    gap: var(--size-12);
  }

  @include responsive('mobile') {
    padding: var(--size-16);
  }

  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--size-24);
  padding: var(--size-32);

  &__burger {
    @include responsive('tablet') {
      display: block;
    }

    display: none;
  }

  &__search {
    margin-right: auto;
    max-width: var(--size-860);
  }
}
</style>
