<template>
  <div
    class="bg-white border border-sky-500 select-none"
    @click="() => update()"
    @mousemove="handleMousemove"
    @mousedown="handleDown">
    <img
      class="mapBlockSize"
      :draggable="false"
      v-if="elementImgSrc"
      :src="elementImgSrc" />
    <div
      v-else
      class="mapBlockSize bg-red-500"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { type MapBlock } from '@/composables/mapEdit/map'
import {
  TileType,
  isFloorByType,
  isTile,
  tileEditElements
} from '@/composables/mapEdit/tile'
import {
  OtherEditType,
  currentSelectedEditElement
} from '@/composables/mapEdit/editElement'

import { useCollectMapBlock } from '@/composables/mapEdit/collectMapBlock'
import { useKeeper } from '@/composables/mapEdit/keeper'
import { useCargo } from '@/composables/mapEdit/cargo'
import { usePlacePoint } from '@/composables/mapEdit/placePoint'

const { start, stop, collect } = useCollectMapBlock()
const { updateKeeperPosition } = useKeeper()
const { addCorgo } = useCargo()
const { addPlacePoint } = usePlacePoint()

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
    case OtherEditType.KEEPER:
      // 只能放置在地板上
      if (isFloorByType(props.data.type)) {
        updateKeeperPosition(props.data.x, props.data.y)
      } else {
        changeType(TileType.FLOOR)
        updateKeeperPosition(props.data.x, props.data.y)
      }
      break
    case OtherEditType.CARGO:
      addCorgo(props.data.x, props.data.y)
      // 这里的 cargo 和 floor 应该是绑定在一起的
      changeType(TileType.FLOOR)
      break
    case OtherEditType.PLACE_POINT:
      addPlacePoint(props.data.x, props.data.y)
      changeType(TileType.FLOOR)
      break
    default:
      if (isTile(currentSelectedEditElement.value)) {
        changeType(editElementType as number)
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
