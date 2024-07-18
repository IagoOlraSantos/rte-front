<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="auth-layout">
    <div class="auth-layout__left">
      <div class="auth-layout__left-header">
        <img src="/src/assets/img/logo-iph-hori.svg" alt="" />
        <div><span>Quer saber mais sobre o IPH?</span> <a href="#">Clique aqui</a></div>
      </div>

      <div class="auth-layout__left-content">
        <RouterView />
      </div>

      <div class="auth-layout__left-footer">
        <img src="/src/assets/img/hemoce-logo.svg" alt="" />
        <img src="/src/assets/img/ceara-gov.svg" alt="" />
      </div>
    </div>

    <div class="auth-layout__right">
      <img src="/src/assets/img/image-bg.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
.auth-layout {
  display: flex;
  flex-direction: row;
  height: 100dvh;
  width: 100%;

  &__left {
    display: flex;
    flex-direction: column;
    padding: 32px;
    flex: 1;

    &-header,
    &-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
  }

  &__right {
    overflow: hidden;
    display: block;

    @include responsive('laptop') {
      display: none;
    }

    img {
      height: 100%;
    }
  }
}
</style>
