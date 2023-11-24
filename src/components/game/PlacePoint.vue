<template>
  <div
    class="absolute mapBlockSize"
    :style="positionStyle">
    <img
      class="block"
      :src="ImgSource.PLACE_POINT" />
  </div>
</template>

<script setup lang="ts">
import { type PlacePoint } from '@/game'
import { usePosition } from '@/composables/position'
import { ImgSource } from '@/composables/img'

interface Props {
  data: PlacePoint
}

const props = defineProps<Props>()

const { positionStyle } = usePosition(props.data)
</script>

<style scoped></style>
