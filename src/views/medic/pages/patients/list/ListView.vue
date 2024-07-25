<script setup lang="ts">
import AppDataTable, { type AppDataTableProps } from '@/components/ui/table/AppDataTable.vue'
import AppButton from '@/components/ui/button/AppButton.vue'
import { onMounted, ref } from 'vue'
import { usePatientGateway } from '@/services/gateway'
import type Patient from '@/models/Patient'
import { useRouter } from 'vue-router'
import { MedicRoute } from '@/views/medic/providers'
import { useLoading } from '@/services/composables'

const router = useRouter();
const patients = ref<Patient[]>([])
const patientGateway = usePatientGateway()
const { isLoading, startLoading, stopLoading } = useLoading()

function createPatient() {
  router.push(MedicRoute.patientCreate())
}

onMounted(async () => {
  startLoading();
  patientGateway
    .findAll()
    .then((patientList) => {
      console.log('patientList', patientList)
      patients.value = patientList
    })
    .catch((e) => {
      console.log('e', e)
    })
    .finally(()=>{
      stopLoading()
    })
})

const fields = ref<AppDataTableProps['fields']>([
  { field: 'name', header: 'Nome', sortable: true },
  { field: 'mothers_name', header: 'Nome da Mãe', sortable: true },
  { field: 'prontuary', header: 'Prontuário', sortable: true },
  { field: 'cpf', header: 'CPF', sortable: true },
  { field: 'pf', header: 'PF', sortable: true },
  { field: 'born_date', header: 'Data Nascimento', sortable: true },
  { field: 'actions', header: 'Ações', sortable: false, style: { width: '50px' } },
])

const detalhePaciente = (data: any) => {
  console.log(data)
}

const requisicaoDeTransfusao = (data: any) => {
  console.log(data)
}
</script>

<template>
  <div class="patient-list">
    <AppDataTable
      class="patient-list__table"
      removableSort
      :paginator="true"
      :rows="10"
      :rowsPerPageOptions="[5, 10, 25]"
      :value="patients"
      :fields="fields"
      :loading="isLoading"
      sortField="id"
      :sortOrder="-1"
    >
      <template #header>
        <div class="patient-list__table__header">
          <h4 class="m-0">Pacientes</h4>
          <div>
            <AppButton @click="createPatient">Cadastrar paciente</AppButton>
          </div>
        </div>
      </template>

      <template #actions="slotProps">
        <div class="patient-list__table--actions">
          <AppButton @click="detalhePaciente(slotProps)">Detalhes</AppButton>
          <AppButton severity="success"  @click="requisicaoDeTransfusao(slotProps)">Requisição de Transfusão</AppButton>
        </div>
      </template>
    </AppDataTable>
  </div>
</template>

<style lang="scss">
.patient-list {
  &__table {
    &__header {
      display: flex;
      justify-content: space-between;
    }

    &--actions {
      display: flex;
      align-items: center;
      gap: 12px;

      button {
        text-wrap: nowrap;
      }
    }
  }
}
</style>
