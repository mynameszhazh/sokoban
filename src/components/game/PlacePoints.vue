<template>
  <PlacePointCom
    v-for="placePoint of placePoints"
    :key="placePoint.id"
    :data="placePoint" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import PlacePointCom from './PlacePoint.vue'
import { type PlacePoint, setupPlacePoints } from '@/game'

const placePoints = reactive([] as PlacePoint[])
setupPlacePoints(placePoints)
</script>

<style scoped></style>
