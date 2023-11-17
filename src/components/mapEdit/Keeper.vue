<template>
  <div
    v-show="isShowKeeper"
    @dblclick="handleDblclick"
    class="absolute"
    :style="positionStyle">
    <img
      class="block"
      :src="keeper.data.imgSrc" />
  </div>
</template>

<script setup lang="ts">
import { useKeeper } from '@/composables/mapEdit/keeper'
import { usePosition } from '@/composables/position'

const { keeper, isShowKeeper, hideKeeper } = useKeeper()
const { positionStyle } = usePosition(keeper)

const handleDblclick = () => {
  hideKeeper()
}
</script>

<style scoped></style>
