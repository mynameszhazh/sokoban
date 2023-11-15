<template>
  <div class="bg-white h-screen">
    <!-- 编辑区域 -->
    <div class="flex">
      <div class="flex-auto bg-gray-600">
        <div v-for="rows of mapData">
          <div v-for="col of rows">
            {{ col }}
          </div>
        </div>
      </div>
      <MapDataDisplay />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import MapDataDisplay from './components/MapDataDisplay.vue'

const mapData = reactive([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
])
</script>

<style scoped></style>
