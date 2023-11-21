<template>
  <PlacePointCom
    v-for="item of placePoints"
    :key="item.id"
    :data="item" />
</template>

<script setup lang="ts">
import { usePlacePoint } from '@/composables/mapEdit/placePoint'
import PlacePointCom from './PlacePoint.vue'

const { placePoints } = usePlacePoint()
</script>

<style scoped></style>
