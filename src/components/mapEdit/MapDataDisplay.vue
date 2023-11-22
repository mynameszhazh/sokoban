<template>
  <div class="flex-auto bg-gray-50">
    <div>地图 JSON 显示区域</div>
    <textarea
      readonly
      class="h-[300px] w-[250px]"
      >{{ JSON.stringify(gameData, null, 4) }}</textarea
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useMap } from '@/composables/mapEdit/map'
import { useKeeper } from '@/composables/mapEdit/keeper'
import { useCargo } from '@/composables/mapEdit/cargo'
import { usePlacePoint } from '@/composables/mapEdit/placePoint'

const { map } = useMap()
const { keeper } = useKeeper()
const { cargos } = useCargo()
const { placePoints } = usePlacePoint()

const gameData = computed(() => {
  return {
    map: map.data.map((row) => {
      return row.map(({ type }) => {
        return type
      })
    }),
    player: keeper,
    cargos: cargos.map(({ x, y }) => {
      return { x, y }
    }),
    placePoints: placePoints.map(({ x, y }) => {
      return { x, y }
    })
  }
})
</script>

<style scoped></style>
