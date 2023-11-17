<template>
  <div
    class="w-[var(--map-block-size)] h-[var(--map-block-size)] bg-white border border-sky-500 select-none"
    @click="() => update()"
    @mousemove="handleMousemove"
    @mousedown="handleDown">
    <img
      :draggable="false"
      v-if="elementImgSrc"
      :src="elementImgSrc" />
    <div
      v-else
      :class="`bg-red-500 w-[var(--map-block-size)] h-[var(--map-block-size)]`"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { type MapBlock } from '@/composables/mapEdit/map'
import { TileType, isTile, tileEditElements } from '@/composables/mapEdit/tile'
import { currentSelectedEditElement } from '@/composables/mapEdit/editElement'

import { useCollectMapBlock } from '@/composables/mapEdit/collectMapBlock'
import { useKeeper } from '@/composables/mapEdit/keeper'

const { start, stop, collect } = useCollectMapBlock()
const { updateKeeperPosition } = useKeeper()

const props = defineProps<{
  data: MapBlock
}>()

const elementImgSrc = computed(() => {
  const ret = tileEditElements.find((item) => item.type === props.data.type)
  return ret?.imgSrc
})

const update = () => {
  if (!currentSelectedEditElement.value) return

  const editElementType = currentSelectedEditElement.value.type
  switch (editElementType) {
    case 'keeper':
      updateKeeperPosition(props.data.x, props.data.y)
      changeType(TileType.floor)
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
