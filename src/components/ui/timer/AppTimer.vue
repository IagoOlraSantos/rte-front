<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import { LocalStorageKeys } from '@/value-objects'
import { useStorage } from '@/infra/storage/local-storage/factory'

type Props = {
  counterText?: string
}

withDefaults(defineProps<Props>(), {
  counterText: 'Enviar código para o e-mail!'
})

const appMemory = useStorage();
const timer = ref(0)
const interval = ref<any>(0)
const emits = defineEmits(['start-timer','stop-timer'])
const visible = computed(() => {
  return timer.value > 0
})

function startTimer(counter = 30) {
  clearInterval(interval.value)
  timer.value = counter
  interval.value = setInterval(() => updateTimer(), 1000)
  emits('start-timer')
}

function initializeCounter() {
  const storedCounter = Number(appMemory.restore({ key: LocalStorageKeys.Counter}))
  const storeTimestamps = appMemory.restore({ key: LocalStorageKeys.CounterTimestamp })

  if (storedCounter && storeTimestamps) {
    const elapsed = dayjs().diff(dayjs(storeTimestamps), 'second')
    const remaining = Math.max(storedCounter - elapsed, 0)
    startTimer(remaining)
  }
}

async function updateTimer() {
  if (timer.value > 0) {
    timer.value--
    appMemory.save({ key: LocalStorageKeys.Counter, value: timer.value })
    appMemory.save({ key: LocalStorageKeys.CounterTimestamp, value: dayjs().toISOString() })
  } else {
    clearInterval(interval.value)
    emits('stop-timer')
  }
}

defineExpose({
  startTimer,
  visible
})

onMounted(() => {
  initializeCounter()
})
</script>

<template>
  <div class="app-timer">
    <small v-if="visible">
      Enviar novamente após
      <span class="app-timer__counter"> {{ timer }} </span>
      segundos
    </small>
    <small class="app-timer__text" @click="() => startTimer()" v-else>{{ counterText }}</small>
  </div>
</template>

<style lang="scss">
.app-timer {
  text-align: end;

  &__counter {
    text-align: center;
    display: inline-block;
    min-width: 16px;
    color: var(--rte-primary-700);
  }
  &__text {
    color: var(--rte-primary-700);
  }
}
</style>
