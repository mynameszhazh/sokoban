<template>
  <div
    class="h-[35px] w-[35px] bg-white border border-sky-500 select-none"
    @click="() => update()"
    @mousemove="handleMousemove"
    @mousedown="handleDown">
    <img
      :draggable="false"
      v-if="elementImgSrc"
      :src="elementImgSrc" />
    <div
      v-else
      class="bg-red-500 w-[32px] h-[32px]"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { type MapBlock } from '@/composables/mapEdit/map'
import { isTile, tileEditElements } from '@/composables/mapEdit/tile'
import { currentSelectedEditElement } from '@/composables/mapEdit/editElement'

import { useCollectMapBlock } from '@/composables/mapEdit/collectMapBlock'

const { start, stop, collect } = useCollectMapBlock()

const elementImgSrc = computed(() => {
  const ret = tileEditElements.find((item) => item.type === props.data.type)
  return ret?.imgSrc
})

const props = defineProps<{
  data: MapBlock
}>()

const update = () => {
  if (!currentSelectedEditElement.value) return

  const editElementType = currentSelectedEditElement.value.type
  switch (editElementType) {
    case 'keeper':
      break
    case 'cargo':
      break
    case 'placePoint':
      break
    default:
      if (isTile(currentSelectedEditElement.value)) {
        changeType(editElementType)
      }
      break
  }
}

function changeType(newType: number) {
  if (newType === props.data.type) return
  props.data.type = newType
}

const handleMousemove = () => {
  collect(() => {
    if (!currentSelectedEditElement.value) return

    if (isTile(currentSelectedEditElement.value)) {
      changeType(currentSelectedEditElement.value?.type as number)
    }
  })
}
const handleMouseup = () => {
  stop()
  document.addEventListener('mouseup', handleMouseup)
}

const handleDown = () => {
  start()
  document.addEventListener('mouseup', handleMouseup)
}
</script>

<style scoped></style>
