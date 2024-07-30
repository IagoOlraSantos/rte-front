<script setup lang="ts">
import InputDate from '@/components/ui/form/InputDate.vue'
import InputFormGroup from './InputFormGroup.vue'

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
  <InputFormGroup :label="props.label" :invalid="props.invalid" :aria="props.aria" :id="props.id">
    <InputDate
      :id="props.id"
      v-model="model"
      :type="props.type"
      :aria-describedby="props.aria"
      :placeholder="props.placeholder"
      :invalid="props.invalid"
    />
    <template #error>
      <slot name="error"></slot>
    </template>
  </InputFormGroup>
</template>
