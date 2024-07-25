<script setup lang="ts">
import DataTable from 'primevue/datatable'
import type { DataTableProps } from 'primevue/datatable'
import Column from 'primevue/column'
import type { ColumnProps } from 'primevue/column'

export interface AppDataTableProps extends DataTableProps {
  fields: ColumnProps[]
}

const props = defineProps<AppDataTableProps>()

defineSlots<{
  header(props: any): any
  body(props: any): any
  actions(props: any): any
}>()
</script>

<template>
  <pre>{{ $slots.body }}</pre>
  <DataTable v-bind="props">
    <template #header="slotProps">
      <slot name="header" v-bind="slotProps"></slot>
    </template>

    <template v-for="(field, index) in props.fields" :key="index">
        <Column v-bind="field">
          <template v-if="$slots.actions && field.field === 'actions'" #body="slotProps">
            <slot  name="actions" v-bind="slotProps"></slot>
          </template>
        </Column>
    </template>
  </DataTable>
</template>
