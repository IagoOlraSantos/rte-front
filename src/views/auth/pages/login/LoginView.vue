<script setup lang="ts">
import { useRouter } from 'vue-router'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import InputText from '@/components/ui/form/InputText.vue'
import InputPassword from '@/components/ui/form/InputPassword.vue'
import AppButton from '@/components/ui/button/AppButton.vue'
import AppLoginTitle from '@/components/ui/page/AppLoginTitle.vue'
import AppSeparator from '@/components/ui/separator/AppSeparator.vue'

import { useAppRoutes, useAppToast, useLoading } from '@/services/composables'
import { useAccountGateway } from '@/services/gateway'
import { useAuth } from '../../stores'

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string({ message: 'Preencha este campo!' }).email({ message: 'E-mail inválido!' }),
      password: z
        .string({ message: 'Preencha este campo!' })
        .max(20, { message: 'Deve ter no máximo 20 caracteres' })
    })
  )
})

const router = useRouter()
const appRoutes = useAppRoutes()
const accountGateway = useAccountGateway()
const appToast = useAppToast()
const { isLoading, startLoading, stopLoading } = useLoading();
const authStore = useAuth()
const [email] = defineField('email')
const [password] = defineField('password')

const onSubmit = handleSubmit(async (form) => {
  startLoading();
  await accountGateway
    .login({ email: form.email, password: form.password })
    .then((account) => {
      authStore.setAccount(account)

      if (account.user.verified_code) {
        router.push(appRoutes.area())
        return
      }

      router.push(appRoutes.twoFactor())
    })
    .catch(() => {
      appToast.error({
        title: 'Atenção',
        message: 'Usuário ou senha estão inválidos!'
      })
    })
    .finally(() => {
      stopLoading()
    })
})
</script>

<template>
  <form class="form-login" @submit="onSubmit">
    <AppLoginTitle />

    <AppSeparator text="Faça login" />

    <div class="form-login__input">
      <label for="email">E-mail</label>
      <InputText
        id="email"
        v-model="email"
        type="email"
        aria-describedby="email-help"
        placeholder="E-mail"
        :invalid="!!errors.email"
      />
      <small v-show="errors.email" id="email-help" class="form-login__input__error">
        {{ errors.email }}
      </small>
    </div>

    <div class="form-login__input">
      <label for="password">Senha</label>
      <InputPassword
        id="password"
        v-model="password"
        aria-describedby="password-help"
        placeholder="Senha"
        :invalid="!!errors.password"
      />
      <small v-show="errors.password" id="password-help" class="form-login__input__error">
        {{ errors.password }}
      </small>
    </div>

    <AppButton class="form-login__btn-submit" type="submit" label="Acessar" raised :loading="isLoading" />
  </form>
</template>

<style lang="scss">
.form-login {
  &__input {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    .p-inputtext {
      width: 100%;
    }

    &__error {
      color: var(--rte-red-400);
    }
  }

  &__btn-submit {
    width: 100%;
  }
}
</style>
