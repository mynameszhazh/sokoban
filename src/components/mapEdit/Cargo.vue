<template>
  <div
    class="absolute mapBlockSize"
    :style="positionStyle"
    @dblclick="handleDblclick">
    <img
      class="block"
      :src="ImgSource.CARGO" />
  </div>
</template>

<script setup lang="ts">
import { ImgSource } from '@/composables/img'
import { type Cargo, useCargo } from '@/composables/mapEdit/cargo'
import { usePosition } from '@/composables/position'

const props = defineProps<{
  data: Cargo
}>()

const { removeCargo } = useCargo()

const { positionStyle } = usePosition(props.data)

const handleDblclick = () => {
  removeCargo(props.data)
}
</script>

<style scoped></style>
