<template>
  <h1 class="login-title">
    Requisição de <br />
    Transfusão de Sangue
  </h1>
</template>

<style lang="scss">
.login-title {
  @include responsive('mobile') {
    font-size: var(--size-24);
  }

  font-size: var(--size-36);
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
}
</style>
