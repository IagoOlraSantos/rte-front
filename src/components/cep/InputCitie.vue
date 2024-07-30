<script setup lang="ts">
import InputSelectGroup from '@/components/ui/form/InputSelectGroup.vue'
import { useBrasilGateway } from '@/services/gateway'
import { computed, onMounted, ref } from 'vue'

type Props = {
  uf?: string
}

const props = defineProps<Props>()
const model = defineModel<string>()
const brasilGateway = useBrasilGateway()
const options = ref<any[]>([])

onMounted(() => {
  brasilGateway.findCities().then((data) => {
    console.log('data', data)
    options.value = data
  })
})

const filteredOptions = computed(() => {
  if (props.uf) {
    return options.value.filter((option) => {
      return option.uf === props.uf
    })
  }
  return []
})
</script>

<template>
  <InputSelectGroup
    v-model="model"
    id="cities"
    label="Cidade"
    placeholder="Cidade do estado"
    :invalid="false"
    aria="cities"
    :options="filteredOptions"
    empty-message="Selecione um estado..."
    option-label="name"
    option-value="name"
    :virtualScrollerOptions="{ itemSize: 38 }"
  >
  </InputSelectGroup>
</template>
