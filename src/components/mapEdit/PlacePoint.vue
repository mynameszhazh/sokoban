<template>
  <div
    class="absolute w-[var(--map-block-size)] h-[var(--map-block-size)]"
    :style="positionStyle"
    @dblclick="handleDblclick">
    <img
      class="block"
      :src="EditElementImgSource.PLACE_POINT" />
  </div>
</template>

<script setup lang="ts">
import { EditElementImgSource } from '@/composables/img'
import {
  type PlacePoint,
  usePlacePoint
} from '@/composables/mapEdit/placePoint'
import { usePosition } from '@/composables/position'

const props = defineProps<{
  data: PlacePoint
}>()

const { removePlacePoint } = usePlacePoint()

const { positionStyle } = usePosition(props.data)

const handleDblclick = () => {
  removePlacePoint(props.data)
}
</script>

<style scoped></style>
