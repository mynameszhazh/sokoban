<template>
  <GargoCom
    v-for="cargo of cargos"
    :key="cargo.id"
    :data="cargo" />
</template>

<script setup lang="ts">
import GargoCom from './Cargo.vue'
import { useCargo } from '@/composables/mapEdit/cargo'

const { cargos } = useCargo()
</script>

<style scoped></style>
