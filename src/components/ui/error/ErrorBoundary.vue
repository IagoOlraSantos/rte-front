<template>
  <div v-if="error">
    Algo de errado aconteceu!
    <pre>{{ error }}</pre>
    <pre>{{ errorMessage }}</pre>
  </div>
  <div v-else><slot></slot></div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      errorMessage: '',
    };
  },
  errorCaptured(error, vm, info) {
    this.error = error;
    this.errorMessage = info;
    return false;
  },
};
</script>
