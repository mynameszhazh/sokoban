<template>
  <div class="bg-white h-screen">
    <!-- 地图区域 -->
    <div class="flex">
      <div class="flex-auto bg-gray-600">
        <div
          class="flex"
          v-for="rows of mapData">
          <div v-for="col of rows">
            <MapBlock :type="col" />
          </div>
        </div>
      </div>
      <MapDataDisplay />
    </div>
    <!-- pick -->
    <div>
      <div>
        <div>row: {{ mapData.length }}</div>
        <div>col: {{ mapData[0].length }}</div>
      </div>
      <EditElementView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import MapDataDisplay from '@/components/mapEdit/MapDataDisplay.vue'
import MapBlock from '@/components/mapEdit/MapBlock.vue'
import EditElementView from '@/components/mapEdit/EditElementView.vue'

const mapData = reactive([
  [1, 1, 1],
  [1, 2, 1],
  [1, 1, 3]
])
</script>

<style scoped></style>
