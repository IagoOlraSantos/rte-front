<script setup lang="ts">
import AppCard from '@/components/ui/card/AppCard.vue'
import InputTextGroup from '@/components/ui/form/InputTextGroup.vue'
import InputDateGroup from '@/components/ui/form/InputDateGroup.vue'
import AppButton from '@/components/ui/button/AppButton.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { usePatientGateway } from '@/services/gateway'
import { useAppToast, useLoading } from '@/services/composables'
import { useRouter } from 'vue-router'
import { MedicRoute } from '@/views/medic/providers'

const patientGateway = usePatientGateway()
const { isLoading, startLoading, stopLoading } = useLoading()
const appToast = useAppToast()
const router = useRouter();

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      name: z.string({ message: 'Preencha este campo!' }),
      last_name: z.string({ message: 'Preencha este campo!' }),
      gender: z.string({ message: 'Preencha este campo!' }),
      cpf: z.string({ message: 'Preencha este campo!' }),
      pf: z.string({ message: 'Preencha este campo!' }),
      born_date: z.date({ message: 'Preencha este campo!' }),
      mothers_name: z.string({ message: 'Preencha este campo!' }),
      fathers_name: z.string({ message: 'Preencha este campo!' }),
      mobile_phone: z.string({ message: 'Preencha este campo!' })
    })
  )
})

const [name] = defineField('name')
const [last_name] = defineField('last_name')
const [gender] = defineField('gender')
const [cpf] = defineField('cpf')
const [pf] = defineField('pf')
const [born_date] = defineField('born_date')
const [mothers_name] = defineField('mothers_name')
const [fathers_name] = defineField('fathers_name')
const [mobile_phone] = defineField('mobile_phone')

const onSubmit = handleSubmit(async (form) => {
  startLoading()
  patientGateway
    .registerPatient({
      cpf: parseInt(form.cpf),
      born_date: form.born_date,
      pf: parseInt(form.pf),
      mothers_name: form.mothers_name,
      fathers_name: form.fathers_name,
      gender: form.gender,
      last_name: form.last_name,
      name: form.name,
      mobile_phone: parseInt(form.mobile_phone)
    })
    .then((patient) => {
      appToast.success({
        title: 'Paciente',
        message: `O paciente ${patient.name} foi cadastrado com sucesso!`
      })
      router.push(MedicRoute.patients())
    })
    .catch(() => {
      appToast.error({
        title: 'Atenção',
        message: 'Algo de errado aconteceu, tente novamente em alguns instantes!'
      })
    })
    .finally(() => {
      stopLoading()
    })
})
</script>

<template>
  <div class="register-patient-page">
    <AppCard>
      <form @submit.prevent="onSubmit" class="register-patient-page__form">
        <InputTextGroup
          v-model="name"
          id="name"
          label="Nome"
          placeholder="Digite o primeiro nome"
          :invalid="!!errors.name"
          aria="name"
        >
          <template #error>
            {{ errors.name }}
          </template>
        </InputTextGroup>

        <InputTextGroup
          v-model="last_name"
          id="last_name"
          label="Sobrenome"
          placeholder="Digite o último nome"
          :invalid="!!errors.last_name"
          aria="last_name"
        >
          <template #error>
            {{ errors.last_name }}
          </template>
        </InputTextGroup>

        <InputTextGroup
          v-model="gender"
          id="gender"
          label="Gênero"
          placeholder="Identificador"
          :invalid="!!errors.gender"
          aria="gender"
        >
          <template #error>
            {{ errors.gender }}
          </template>
        </InputTextGroup>

        <InputTextGroup
          v-model="cpf"
          id="cpf"
          label="CPF"
          placeholder="Digite o cpf"
          :invalid="!!errors.cpf"
          aria="cpf"
        >
          <template #error>
            {{ errors.cpf }}
          </template>
        </InputTextGroup>

        <InputTextGroup
          v-model="pf"
          id="pf"
          label="PF"
          placeholder="Digite o pf"
          :invalid="!!errors.pf"
          aria="pf"
        >
          <template #error>
            {{ errors.pf }}
          </template>
        </InputTextGroup>

        <InputDateGroup
          v-model="born_date"
          id="born_date"
          label="Data de nascimento"
          placeholder="Digite a data de nascimento"
          :invalid="!!errors.born_date"
          aria="born_date"
        >
          <template #error>
            {{ errors.born_date }}
          </template>
        </InputDateGroup>

        <InputTextGroup
          v-model="mothers_name"
          id="mothers_name"
          label="Nome da mãe"
          placeholder="Digite o nome da mãe"
          :invalid="!!errors.mothers_name"
          aria="mothers_name"
        >
          <template #error>
            {{ errors.mothers_name }}
          </template>
        </InputTextGroup>

        <InputTextGroup
          v-model="fathers_name"
          id="fathers_name"
          label="Nome do pai"
          placeholder="Digite o nome do pai"
          :invalid="!!errors.fathers_name"
          aria="fathers_name"
        >
          <template #error>
            {{ errors.fathers_name }}
          </template>
        </InputTextGroup>

        <InputTextGroup
          v-model="mobile_phone"
          id="mobile_phone"
          label="Número celular"
          placeholder="Digite o número do celular"
          :invalid="!!errors.mobile_phone"
          aria="mobile_phone"
        >
          <template #error>
            {{ errors.mobile_phone }}
          </template>
        </InputTextGroup>

        <AppButton
          class="register-patient-page__form__btn-submit"
          type="submit"
          raised
          :loading="isLoading"
        >
          Cadastrar
        </AppButton>
      </form>
    </AppCard>
  </div>
</template>

<style lang="scss" scoped>
.register-patient-page {
  margin-top: 10px;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;

    input {
      width: 100%;
    }

    &__btn-submit {
      margin-top: 12px;
    }
  }
}
</style>
