<script setup lang="ts">
import AppPageTitleContainer from './AppPageTitleContainer.vue'
import PageTitle from './PageTitle.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

defineOptions({
  name: 'AppPageTitle'
})

const route = useRoute()

const pageTitle = computed(() => {
  return route.meta.title;
})
</script>

<template>
  <div class="app-page-title">
    <AppPageTitleContainer>
      <PageTitle v-if="pageTitle">
        {{ pageTitle }}
      </PageTitle>

      <slot name="actions"></slot>
    </AppPageTitleContainer>

    <slot></slot>
  </div>
</template>
