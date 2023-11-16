<template>
  <div
    class="h-[35px] w-[35px] bg-[red] border border-sky-500"
    @click="updateMap"
    @mousemove='updateMap'
    @mousedown='updateMap'
    >
    <img :src="elementImgSrc" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { type MapBlock } from '@/composables/mapEdit/map'
import { tileEditElements } from '@/composables/mapEdit/tile'
import { useMap } from '@/composables/mapEdit/map'

const { updateMapData } = useMap()
const elementImgSrc = computed(() => {
  const ret = tileEditElements.find((item) => item.type === props.data.type)
  return ret?.imgSrc
})

const props = defineProps<{
  data: MapBlock
}>()

const updateMap = () => {
  updateMapData(props.data)
}
</script>

<style scoped></style>
