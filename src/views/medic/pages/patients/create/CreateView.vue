<script setup lang="ts">
import AppCard from '@/components/ui/card/AppCard.vue'
import InputTextGroup from '@/components/ui/form/InputTextGroup.vue'
import InputDateGroup from '@/components/ui/form/InputDateGroup.vue'
import InputSelectGroup from '@/components/ui/form/InputSelectGroup.vue'
import InputCities from '@/components/cep/InputCitie.vue'
import InputStates from '@/components/cep/InputState.vue'


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
const router = useRouter()

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      name: z.string({ message: 'Preencha este campo!' }),
      gender: z.string({ message: 'Preencha este campo!' }),
      born_date: z.date({ message: 'Preencha este campo!' }),
      mothers_name: z.string({ message: 'Preencha este campo!' }),

      cpf: z.string({ message: 'Preencha este campo!' }),
      prontuary: z.string({ message: 'Preencha este campo!' }),
      pf: z.string({ message: 'Preencha este campo!' }),
      mobile_phone: z.string({ message: 'Preencha este campo!' }),

      endereco: z.string({ message: 'Preencha este campo!' }),
      numero: z.string({ message: 'Preencha este campo!' }),
      cep: z.string({ message: 'Preencha este campo!' }),
      complement: z.string({ message: 'Preencha este campo!' }),

      bairro: z.string({ message: 'Preencha este campo!' }),
      estado: z.string({ message: 'Preencha este campo!' }),
      cidade: z.string({ message: 'Preencha este campo!' })
    })
  )
})

const [name] = defineField('name')
const [gender] = defineField('gender')
const [born_date] = defineField('born_date')
const [mothers_name] = defineField('mothers_name')

const [cpf] = defineField('cpf')
const [prontuary] = defineField('prontuary')
const [pf] = defineField('pf')
const [mobile_phone] = defineField('mobile_phone')

const [endereco] = defineField('endereco')
const [numero] = defineField('numero')
const [cep] = defineField('cep')
const [complement] = defineField('complement')

const [bairro] = defineField('bairro')
const [estado] = defineField('estado')
const [cidade] = defineField('cidade')

const onSubmit = handleSubmit(async (form) => {
  startLoading()
  patientGateway
    .registerPatient({
      cpf: parseInt(form.cpf),
      born_date: form.born_date,
      pf: parseInt(form.pf),
      mothers_name: form.mothers_name,
      fathers_name: '',
      gender: form.gender,
      last_name: '',
      name: form.name,
      mobile_phone: parseInt(form.mobile_phone)
    })
    .then((patient) => {
      appToast.success({
        title: 'Paciente',
        message: `O paciente ${patient.name} foi cadastrado com sucesso!`
      })
      backToList();
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

const backToList = () => {
  router.push(MedicRoute.patients())
}
</script>

<template>
  <div class="register-patient-page">
    <AppCard>
      <form @submit.prevent="onSubmit" class="register-patient-page__form">
        <div>
          <h3>Dados pessoais</h3>
          <div class="responsive mb-20">
            <InputTextGroup
              v-model="name"
              id="name"
              label="Nome"
              placeholder="Nome completo do paciente"
              :invalid="!!errors.name"
              aria="name"
            >
              <template #error>
                {{ errors.name }}
              </template>
            </InputTextGroup>

            <InputSelectGroup
              v-model="gender"
              id="gender"
              label="Sexo"
              placeholder="Sexo do paciente"
              :invalid="!!errors.gender"
              aria="gender"
              :options="[
                { text: 'Masculino', value: 'masculino' },
                { text: 'Feminino', value: 'feminino' },
                { text: 'Outros', value: 'outros' }
              ]"
            >
              <template #error>
                {{ errors.gender }}
              </template>
            </InputSelectGroup>

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
              placeholder="Nome da mãe do paciente"
              :invalid="!!errors.mothers_name"
              aria="mothers_name"
            >
              <template #error>
                {{ errors.mothers_name }}
              </template>
            </InputTextGroup>
          </div>

          <div class="responsive mb-20">
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
              v-model="prontuary"
              id="prontuary"
              label="Prontuário"
              placeholder="Prontuário do paciente"
              :invalid="!!errors.prontuary"
              aria="prontuary"
            >
              <template #error>
                {{ errors.prontuary }}
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

            <InputTextGroup
              v-model="mobile_phone"
              id="mobile_phone"
              label="Telefone celular"
              placeholder="Digite o número do celular"
              :invalid="!!errors.mobile_phone"
              aria="mobile_phone"
            >
              <template #error>
                {{ errors.mobile_phone }}
              </template>
            </InputTextGroup>
          </div>

          <div></div>
        </div>

        <div>
          <h3>Endereço</h3>
          <div class="responsive mb-20">
            <InputTextGroup
              v-model="endereco"
              id="endereco"
              label="Avenida/Rua/Beco"
              placeholder="Digite aqui..."
              :invalid="!!errors.endereco"
              aria="endereco"
            >
              <template #error>
                {{ errors.endereco }}
              </template>
            </InputTextGroup>

            <InputTextGroup
              v-model="numero"
              id="numero"
              label="Número"
              placeholder="Digite aqui..."
              :invalid="!!errors.numero"
              aria="numero"
            >
              <template #error>
                {{ errors.numero }}
              </template>
            </InputTextGroup>

            <InputTextGroup
              v-model="cep"
              id="cep"
              label="CEP"
              placeholder="Digite aqui..."
              :invalid="!!errors.cep"
              aria="cep"
            >
              <template #error>
                {{ errors.cep }}
              </template>
            </InputTextGroup>

            <InputTextGroup
              v-model="complement"
              id="complement"
              label="Complemento"
              placeholder="Digite aqui..."
              :invalid="!!errors.complement"
              aria="complement"
            >
              <template #error>
                {{ errors.complement }}
              </template>
            </InputTextGroup>
          </div>
          <div class="responsive mb-20">
            <InputTextGroup
              v-model="bairro"
              id="bairro"
              label="Bairro"
              placeholder="Digite aqui..."
              :invalid="!!errors.bairro"
              aria="bairro"
            >
              <template #error>
                {{ errors.bairro }}
              </template>
            </InputTextGroup>

            <InputStates v-model="estado" />
            <InputCities v-model="cidade" :uf="estado" />

            <InputSelectGroup
              v-if="false"
              v-model="estado"
              id="estado"
              label="Estado"
              placeholder="Estado do paciente"
              :invalid="!!errors.estado"
              aria="estado"
              :options="[
                { text: 'Masculino', value: 'masculino' },
                { text: 'Feminino', value: 'feminino' },
                { text: 'Outros', value: 'outros' }
              ]"
            >
              <template #error>
                {{ errors.estado }}
              </template>
            </InputSelectGroup>

            <InputSelectGroup
              v-if="false"
              v-model="cidade"
              id="cidade"
              label="Cidade"
              placeholder="Cidade do paciente"
              :invalid="!!errors.cidade"
              aria="cidade"
              :options="[
                { text: 'Masculino', value: 'masculino' },
                { text: 'Feminino', value: 'feminino' },
                { text: 'Outros', value: 'outros' }
              ]"
            >
              <template #error>
                {{ errors.cidade }}
              </template>
            </InputSelectGroup>
          </div>
        </div>

        <div class="flex flex-row gap-3 content-end">
          <AppButton raised :loading="isLoading" severity="secondary" @click="backToList">
            Cancelar
          </AppButton>

          <AppButton type="submit" raised :loading="isLoading"> Cadastrar </AppButton>
        </div>
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

    &__btn-submit {
      margin-top: 12px;
    }
  }
}
</style>
