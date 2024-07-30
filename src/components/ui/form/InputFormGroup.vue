<script setup lang="ts">
export type InputFormGroupProps = {
  id?: string
  aria?: string
  label?: string
  invalid?: boolean
}


const props = withDefaults(defineProps<InputFormGroupProps>(), {
  label: 'Label',
  invalid: false,
  id: 'input-text'
})
</script>

<template>
  <div class="input-text-group">
    <label :for="props.id">{{ props.label }}</label>
    <slot></slot>
    <small v-show="props.invalid" :id="props.aria" class="input-text-group__error">
      <slot name="error"></slot>
    </small>
  </div>
</template>

<style lang="scss" scoped>
.input-text-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 180px;
  position: relative;

  &__error {
    position: absolute;
    bottom: var(--size-20-);
    color: var(--rte-red-400);
  }
}
</style>
