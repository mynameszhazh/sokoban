<template>
  <GargoCom
    v-for="cargo of cargos"
    :key="cargo.id"
    :data="cargo" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import GargoCom from './Cargo.vue'
import { type Cargo, setupCargos } from '@/game'

const cargos = reactive([] as Cargo[])
setupCargos(cargos)
</script>

<style scoped></style>
