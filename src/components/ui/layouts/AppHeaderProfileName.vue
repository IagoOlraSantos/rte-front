<script setup lang="ts">
defineOptions({
  name: 'AppHeaderProfileName'
})

export type ProfileNameProps = {
  name: string
}

withDefaults(defineProps<Partial<ProfileNameProps>>(), {
  name: 'Iago Santos'
})
</script>

<template>
  <span class="app-profile-name">
    Olá, <strong>{{ name }} </strong>
  </span>
</template>

<style lang="scss">
.app-profile-name {
  @include responsive('tablet') {
    display: none;
  }

  strong {
    font-weight: 600;
  }

  white-space: nowrap;
}
</style>
