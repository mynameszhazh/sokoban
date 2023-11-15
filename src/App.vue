<template>
  <div>sokoman{{ map }}</div>
</template>

<script setup lang="ts">
import { useMapStore } from './store'

const { map } = useMapStore()
</script>
