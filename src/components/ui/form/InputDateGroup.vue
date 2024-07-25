<script setup lang="ts">
import InputDate from '@/components/ui/form/InputDate.vue'

type Props = {
  id?: string
  type?: 'text' | 'email'
  aria?: string
  label?: string
  placeholder?: string
  invalid?: boolean
}

const model = defineModel<Date>()

const props = withDefaults(defineProps<Props>(), {
  label: 'Label',
  placeholder: 'Placeholder',
  type: 'text',
  invalid: false,
  id: 'input-text'
})
</script>

<template>
  <div class="input-date-group">
    <label :for="props.id">{{ props.label }}</label>
    <InputDate
      :id="props.id"
      v-model="model"
      :type="props.type"
      :aria-describedby="props.aria"
      :placeholder="props.placeholder"
      :invalid="props.invalid"
    />
    <small v-show="props.invalid" :id="props.aria" class="input-date-group__error">
      <slot name="error"></slot>
    </small>
  </div>
</template>

<style lang="scss" scoped>
.input-date-group {
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
