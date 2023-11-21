<template>
  <div>
    <div class="flex">
      <div v-for="editElement of editElements.tile">
        <EditElement :edit-element="editElement" />
      </div>
    </div>

    <div class="flex">
      <div v-for="editElement of editElements.other">
        <EditElement :edit-element="editElement" />
      </div>
    </div>

    <div>
      <div>当前选中: {{ selectEditElementTitle }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import EditElement from './EditElement.vue'

import { currentSelectedEditElement } from '@/composables/mapEdit/editElement'
import { tileEditElements } from '@/composables/mapEdit/tile'
import { keeperEditElement } from '@/composables/mapEdit/keeper'
import { cargoEditElement } from '@/composables/mapEdit/cargo'
import { placePointEditElement } from '@/composables/mapEdit/placePoint'

const selectEditElementTitle = computed(() => {
  if (!currentSelectedEditElement.value) return '无选中'

  return currentSelectedEditElement.value?.title
})

const editElements = {
  tile: tileEditElements,
  other: [keeperEditElement, cargoEditElement, placePointEditElement]
}
</script>

<style scoped></style>
