<template>
  <GargoCom
    v-for="cargo of cargos.data"
    :key="cargo.id"
    :data="cargo" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import GargoCom from './Cargo.vue'
import { Cargos, setupCargos } from '@/game'

const cargos = reactive({} as Cargos)
setupCargos(cargos)
</script>

<style scoped></style>
