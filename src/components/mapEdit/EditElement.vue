<template>
  <div
    class="pr-[10px]"
    @click="handleClick">
    <img :src="props.editElement.imgSrc" />
    {{ props.editElement.title }}
  </div>
</template>

<script setup lang="ts">
import {
  type EditElement,
  setcurrentSelectedEditElement
} from '@/composables/mapEdit/editElement.ts'
const props = defineProps<{
  editElement: EditElement
}>()

const handleClick = () => {
  setcurrentSelectedEditElement(props.editElement)
}
</script>

<style scoped></style>
