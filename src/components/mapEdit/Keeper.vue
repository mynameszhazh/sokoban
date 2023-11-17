<template>
  <div
    v-show="isShowKeeper"
    @dblclick="handleDblclick"
    class="absolute"
    style="top: 0; left: 0">
    <img
      class="block"
      :src="keeper.data.imgSrc" />
  </div>
</template>

<script setup lang="ts">
import { useKeeper } from '@/composables/mapEdit/keeper'

const { keeper, isShowKeeper, hideKeeper } = useKeeper()

const handleDblclick = () => {
  hideKeeper()
}
</script>

<style scoped></style>
