<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="auth-layout">
    <div class="auth-layout__left">
      <div class="auth-layout__left-header">
        <img src="/src/assets/img/logo-iph-hori.svg" alt="" />
        <div class="auth-layout__left-header__know-more">
          <span class="desktop">Quer saber mais sobre o IPH?</span>
          <a class="desktop" href="#">Clique aqui</a>
        </div>

        <div class="auth-layout__left-header__know-more--mobile">
          <a href="#" class="mobile">Saiba mais IPH</a>
        </div>
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

    &-header {
      &__know-more {
        @include responsive('mobile-landscape') {
          display: none;
        }

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 8px;

        a {
          color: var(--rte-primary-color);
        }

        &--mobile {
          @include responsive('mobile-landscape') {
            display: block;
          }

          display: none;

          a {
            color: var(--rte-primary-color);
          }
        }
      }

      img {
        @include responsive('mobile') {
          width: 100px;
        }
      }
    }

    &-footer {
      img {
        @include responsive('mobile') {
          width: 130px;
        }
      }
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
