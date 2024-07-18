<script setup lang="ts">
import AppIcon from '../icons/AppIcon.vue'
import AppIconField from '../icons/AppIconField.vue'
import InputText from './InputText.vue'
import InputIcon from './InputIcon.vue'

defineOptions({
  name: 'InputSearch'
})

type SearchType = string
type SearchEvent = {
  (e: 'search', value?: string): void
}

const model = defineModel<SearchType>()

const emit = defineEmits<SearchEvent>()

type AppSearchProps = {
  placeholder?: string
  disabled?: boolean
}

withDefaults(defineProps<AppSearchProps>(), {
  placeholder: 'Faça sua busca aqui...',
  disabled: false
})
</script>

<template>
  <AppIconField class="app-input-search">
    <InputText v-model="model" class="app-input-search--input" placeholder="Faça sua busca aqui..."/>
    <InputIcon class="app-input-search--icon">
      <AppIcon name="search" @click="emit('search', model)"  size="lg"/>
    </InputIcon>
  </AppIconField>
</template>

<style lang="scss">
.app-input-search {
  width: 100%;

  &--input {
    width: 100%;
    max-width: 860px;
  }

  &--icon {
    display: grid;
    place-content: center;
  }
}

</style>
