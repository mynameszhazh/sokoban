<template>
  <div
    class="flex"
    v-for="kind of pickData">
    <div v-for="item of kind.value">
      <img :src="item.imgUrl" />
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const pickData: any[] = [
  {
    kind: 'bg',
    value: [
      {
        id: 1,
        imgUrl: '',
        name: '地板'
      },
      {
        id: 2,
        imgUrl: '',
        name: '墙'
      }
    ]
  },
  {
    kind: 'pick',
    value: [
      {
        id: 3,
        imgUrl: '',
        name: '玩家'
      },
      {
        id: 4,
        imgUrl: '',
        name: '箱子'
      },
      {
        id: 5,
        imgUrl: '',
        name: '放置点'
      }
    ]
  }
]
</script>

<style scoped></style>
