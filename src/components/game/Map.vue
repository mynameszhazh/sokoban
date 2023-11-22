<template>
  <div class="text-[20px] text-red-500">
    <div
      v-for="rows of map"
      class="flex">
      <div v-for="col of rows">
        <div>
          <img
            :draggable="false"
            class="mapBlockSize block"
            :src="BlockImg(col)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ImgSource } from '@/composables/img'
import { TileType } from '@/composables/mapEdit/tile'
import { useMap } from '@/game'

const { getCurrentGameData } = useMap()

const { map } = getCurrentGameData()

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
