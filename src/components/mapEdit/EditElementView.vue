<template>
  <div>
    <div
      v-for="(kind, key) in elements"
      class="flex">
      <div
        v-for="item of elements[key]"
        class="pr-[10px]"
        @click="elementItemClick(item, kind)">
        <img :src="item.img" />
        {{ item.name }}
      </div>
    </div>

    <div>
      <div>当前选中: {{}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { tileElements } from '@/composables/mapEdit/tile'

const elements = reactive({
  tile: tileElements,
  other: []
})

const elementItemClick = (data: any) => {
  console.log('data:', data)
}
</script>

<style scoped></style>
