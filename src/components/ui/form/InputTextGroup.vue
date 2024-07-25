<script setup lang="ts">
import InputText from '@/components/ui/form/InputText.vue'

type Props = {
  id?: string
  type?: 'text' | 'email'
  aria?: string
  label?: string
  placeholder?: string
  invalid?: boolean
}

const model = defineModel<string>()

const props = withDefaults(defineProps<Props>(), {
  label: 'Label',
  placeholder: 'Placeholder',
  type: 'text',
  invalid: false,
  id: 'input-text'
})
</script>

<template>
  <div class="input-text-group">
    <label :for="props.id">{{ props.label }}</label>
    <InputText
      :id="props.id"
      v-model="model"
      :type="props.type"
      :aria-describedby="props.aria"
      :placeholder="props.placeholder"
      :invalid="props.invalid"
    />
    <small v-show="props.invalid" :id="props.aria" class="input-text-group__error">
      <slot name="error"></slot>
    </small>
  </div>
</template>

<style lang="scss" scoped>
.input-text-group {
  display: flex;
  flex-direction: column;

  .p-inputtext {
    width: 100%;
  }

  &__error {
    color: var(--rte-red-400);
  }
}
</style>
