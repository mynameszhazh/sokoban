<template>
  <div class="bg-white h-screen">
    <!-- 地图区域 -->
    <div class="flex">
      <div class="flex-auto relative bg-gray-600">
        <div
          class="flex"
          v-for="rows of map.data">
          <div v-for="item of rows">
            <MapBlock :data="item" />
          </div>
        </div>
        <div>
          <Keeper />
          <Cargos />
          <PlacePoints />
        </div>
      </div>
      <MapDataDisplay />
    </div>
    <!-- pick -->
    <div>
      <div>
        <div>row: <input v-model="row" /></div>
        <div>col: <input v-model="col" /></div>
      </div>
      <EditElementView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import Keeper from '@/components/mapEdit/Keeper.vue'
import Cargos from '@/components/mapEdit/Cargos.vue'
import PlacePoints from '@/components/mapEdit/PlacePoints.vue'
import MapDataDisplay from '@/components/mapEdit/MapDataDisplay.vue'
import MapBlock from '@/components/mapEdit/MapBlock.vue'
import EditElementView from '@/components/mapEdit/EditElementView.vue'
import { useMap } from '@/composables/mapEdit/map'

const { map, updateMapCol, updateMapRow, initMap } = useMap()

const row = ref(8)
const col = ref(8)
watchEffect(() => {
  if (!col.value) return
  updateMapCol(col.value)
})

watchEffect(() => {
  if (!row.value) return
  updateMapRow(row.value)
})

initMap()
</script>

<style scoped></style>
