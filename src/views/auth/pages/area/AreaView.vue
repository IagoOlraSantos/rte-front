<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import AppButton from '@/components/ui/button/AppButton.vue'
import AppLoginTitle from '@/components/ui/page/AppLoginTitle.vue'
import AppSeparator from '@/components/ui/separator/AppSeparator.vue'
import InputSelect from '@/components/ui/form/InputSelect.vue'
import { useAppRoutes } from '@/services/composables'
import { useHospitalGateway } from '@/services/gateway'
import Hospital from '@/models/Hospital'
import { Areas } from '@/value-objects'
import { useAuth } from '../../stores'

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      hospital: z.number({ message: 'Selecione um hospital!' }),
      area: z.number({ message: 'Selecione uma área!' })
    })
  )
})

const auth = useAuth()
const router = useRouter()
const appRoutes = useAppRoutes()
const hospitalGateway = useHospitalGateway()
const [hospital] = defineField('hospital')
const [area] = defineField('area')

const hospitals = ref<Hospital[]>()
const disableHospitalOptions = ref(false)
const areas = ref<{ id: number; name: string }[]>()
const disableAreaOptions = ref(false)

onMounted(() => {
  hospitalGateway
    .findAllAreas()
    .then((areasList) => {
      areas.value = areasList

      if(areasList.length === 1) {
        area.value = areasList[0].id
        disableAreaOptions.value = true;
      }
    })
    .catch((e) => {
      console.log('error', e)
    })

  hospitalGateway
    .findAll()
    .then((hospitalList) => {
      hospitals.value = hospitalList

      if(hospitalList.length === 1) {
        hospital.value = hospitalList[0].id
        disableHospitalOptions.value = true;
      }
    })
    .catch((e) => {
      console.log('error', e)
    })
})

function redirectToApp(form: { hospital: number; area: number }) {
  if (!auth.token) {
    throw new Error('Token não foi encontrado!')
  }

  switch (form.area) {
    case Areas.HospitalManagement:
      router.push(
        appRoutes.hospitalManagement({
          token: auth.token,
          hospital: form.hospital,
          area: Areas.HospitalManagement
        })
      )
      break
    case Areas.FinancialManagement:
      router.push(
        appRoutes.financialManagement({
          token: auth.token,
          hospital: form.hospital,
          area: Areas.FinancialManagement
        })
      )
      break
    case Areas.Medic:
      router.push(
        appRoutes.medic({
          token: auth.token,
          hospital: form.hospital,
          area: Areas.Medic
        })
      )
      break
    case Areas.Transfusion:
      router.push(
        appRoutes.transfusion({
          token: auth.token,
          hospital: form.hospital,
          area: Areas.Transfusion
        })
      )
      break
    case Areas.TransfusionAgency:
      router.push(
        appRoutes.transfusionAgency({
          token: auth.token,
          hospital: form.hospital,
          area: Areas.TransfusionAgency
        })
      )
      break
    case Areas.Triagem:
      router.push(
        appRoutes.triagem({
          token: auth.token,
          hospital: form.hospital,
          area: Areas.Triagem
        })
      )
      break
    default:
      console.error('Opção inválida!')
  }
}

const onSubmit = handleSubmit(async (form) => {
  redirectToApp(form)
})
</script>

<template>
  <form class="auth-view" @submit="onSubmit">
    <AppLoginTitle />

    <AppSeparator text="Hospital" />

    <div class="auth-view__input">
      <label for="hospital">Hospital</label>
      <InputSelect
        id="hospital"
        v-model="hospital"
        aria-describedby="hospital-help"
        placeholder="Selecione um Hospital"
        :invalid="!!errors.hospital"
        :options="hospitals"
        :disabled="disableHospitalOptions"
        optionLabel="name"
        optionValue="id"
      />
      <small v-show="errors.hospital" id="hospital-help" class="auth-view__input__error">
        {{ errors.hospital }}
      </small>
    </div>

    <div class="auth-view__input">
      <label for="area">Área</label>
      <InputSelect
        id="area"
        v-model="area"
        aria-describedby="area-help"
        placeholder="Selecione uma Área"
        :invalid="!!errors.area"
        :options="areas"
        :disabled="disableAreaOptions"
        optionLabel="name"
        optionValue="id"
      />
      <small v-show="errors.area" id="area-help" class="auth-view__input__error">
        {{ errors.area }}
      </small>
    </div>

    <AppButton class="auth-view__btn-submit" type="submit" label="Acessar" raised />
  </form>
</template>
