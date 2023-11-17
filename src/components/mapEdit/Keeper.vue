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
import { useUserPosition } from '@/composables/userPosition'

const { keeper, isShowKeeper, hideKeeper } = useKeeper()
const { positionStyle } = useUserPosition(keeper)

const handleDblclick = () => {
  hideKeeper()
}
</script>

<style scoped></style>
