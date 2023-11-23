<template>
  <div class="text-red-200">
    <MapCom />
    <!-- <Player /> -->
  </div>
</template>

<script setup lang="ts">
import MapCom from '@/components/game/Map.vue'
// import Player from '@/components/game/Player.vue';

import { startGame } from '@/game'
import { onMounted } from 'vue'

onMounted(() => {
  startGame()
})
</script>

<style scoped></style>
