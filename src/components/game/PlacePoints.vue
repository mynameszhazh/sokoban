<template>
  <PlacePointCom
    v-for="placePoint of placePoints.data"
    :key="placePoint.id"
    :data="placePoint" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import PlacePointCom from './PlacePoint.vue'
import { type PlacePoints, setupPlacePoints } from '@/game'

const placePoints = reactive({} as PlacePoints)
setupPlacePoints(placePoints)
</script>

<style scoped></style>
