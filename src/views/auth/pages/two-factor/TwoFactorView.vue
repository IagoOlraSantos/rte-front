<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import InputText from '@/components/ui/form/InputText.vue'
import AppButton from '@/components/ui/button/AppButton.vue'
import AppLoginTitle from '@/components/ui/page/AppLoginTitle.vue'
import AppSeparator from '@/components/ui/separator/AppSeparator.vue'
import AppTimer from '@/components/ui/timer/AppTimer.vue'

import { useAppRoutes, useAppToast } from '@/services/composables'
import { useAccountGateway } from '@/services/gateway'

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      code: z
        .string({ message: 'Preencha este campo!' })
        .min(6, { message: 'O campo deve ter 6 caracteres' })
        .max(6, { message: 'O campo deve ter 6 caracteres' })
    })
  )
})

const timer = ref<typeof AppTimer>()
const router = useRouter()
const appRoutes = useAppRoutes()
const accountGateway = useAccountGateway()
const appToast = useAppToast()
const [code] = defineField('code')

const onSubmit = handleSubmit(async (form) => {
  try {
    await accountGateway
      .verifyTwoFactorCode(form.code)
    router.push(appRoutes.area())
  } catch (error) {
    appToast.error({
      title: 'Atenção',
      message: 'Código inválido ou expirado!'
    })
  }
})

async function sendMail() {
  try {
     await accountGateway
      .sendTwoFactorCode()
      appToast.success({
        title: 'E-mail',
        message: 'Código enviado para o seu e-mail!'
      })
  } catch (error) {
    appToast.error({
      title: 'Atenção',
      message: 'Ocorreu algum erro ao enviar o código para seu e-mail!'
    })
  }
}
</script>

<template>
  <form class="auth-view" @submit="onSubmit">
    <AppLoginTitle />

    <AppSeparator text="Código" />

    <div class="auth-view__input">
      <label for="code">Código</label>
      <InputText
        id="code"
        v-model="code"
        type="text"
        aria-describedby="code-help"
        placeholder="Código"
        :invalid="!!errors.code"
      />
      <AppTimer ref="timer" @start-timer="sendMail"/>
      <small v-show="errors.code" id="code-help" class="auth-view__input__error">
        {{ errors.code }}
      </small>
    </div>

    <AppButton class="auth-view__btn-submit" type="submit" label="Enviar" raised />
  </form>
</template>
