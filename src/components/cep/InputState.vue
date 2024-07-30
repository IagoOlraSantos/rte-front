<script setup lang="ts">
import InputSelectGroup from '@/components/ui/form/InputSelectGroup.vue'
import { useBrasilGateway } from '@/services/gateway'
import { onMounted, ref } from 'vue'

const model = defineModel<string>();
const brasilGateway = useBrasilGateway();
const options = ref<any[]>([])

onMounted(() => {
  brasilGateway.findStates().then(data => {
    options.value = data;
  })
})

</script>

<template>

  <InputSelectGroup
    v-model="model"
    id="state"
    label="Estados"
    placeholder="Estados brasileiros"
    :invalid="false"
    aria="state"
    :options="options"
    option-label="name"
    option-value="uf"
    :virtualScrollerOptions="{ itemSize: 38 }"
  >
  </InputSelectGroup>
</template>
