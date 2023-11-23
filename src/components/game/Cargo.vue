<template>
  <div
    class="absolute mapBlockSize"
    :style="positionStyle">
    <img
      class="block"
      :src="
        props.data.onTargetPoint ? ImgSource.CARGO_ON_TARGET : ImgSource.CARGO
      " />
  </div>
</template>

<script setup lang="ts">
import { type Cargo } from '@/game'
import { usePosition } from '@/composables/position'
import { ImgSource } from '@/composables/img'

interface Props {
  data: Cargo
}

const props = defineProps<Props>()

const { positionStyle } = usePosition(props.data)
</script>

<style scoped></style>
