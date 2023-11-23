<template>
  <div class="text-[20px] text-red-500">
    <div
      v-for="rows of map.data"
      class="flex">
      <div v-for="col of rows">
        <div>
          <img
            :draggable="false"
            class="mapBlockSize block"
            :src="BlockImg(col.name)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import { TileType } from '@/composables/type'
import { ImgSource } from '@/composables/img'

import { type Map, setupMap } from '@/game'

const map = reactive({} as Map)
setupMap(map)

const BlockImg = (editElementType: number) => {
  switch (editElementType) {
    case TileType.FLOOR:
      return ImgSource.FLOOR
    case TileType.WALL:
      return ImgSource.WALL
    default:
      return ImgSource.EMPTY
  }
}
</script>

<style scoped></style>
