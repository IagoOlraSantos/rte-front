<script setup lang="ts">
import InputSelect from '@/components/ui/form/InputSelect.vue'
import InputFormGroup from './InputFormGroup.vue'

type Props = {
  id?: string
  aria?: string
  label?: string
  placeholder?: string
  options: any[]
  optionLabel?: string
  optionValue?: string
  disabled?: string
  emptyMessage?: string
  virtualScrollerOptions?: any;
}

const model = defineModel<string>()

const props = withDefaults(defineProps<Props>(), {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: false,
  id: 'input-text',
  optionLabel: 'text',
  optionValue: 'value',
  emptyMessage: 'Sem opções'
})
</script>

<template>
  <InputFormGroup :label="props.label" :invalid="props.invalid" :aria="props.aria" :id="props.id">
    <InputSelect
      :id="props.id"
      v-model="model"
      :aria-describedby="props.aria"
      :placeholder="props.placeholder"
      :invalid="props.invalid"
      :options="options"
      :disabled="disabled"
      :optionLabel="props.optionLabel"
      :optionValue="props.optionValue"
      :emptyMessage="props.emptyMessage"
      :virtualScrollerOptions="virtualScrollerOptions"
    />
    <template #error>
      <slot name="error"></slot>
    </template>
  </InputFormGroup>
</template>

