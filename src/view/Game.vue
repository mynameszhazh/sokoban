<template>
  <div class="text-red-200">
    <MapCom />
    <Player />
    <Cargos />
    <PlacePoints />
  </div>
</template>

<script setup lang="ts">
import MapCom from '@/components/game/Map.vue'
import Player from '@/components/game/Player.vue'
import Cargos from '@/components/game/Cargos.vue'
import PlacePoints from '@/components/game/PlacePoints.vue'

import { startGame } from '@/game'
import { onMounted } from 'vue'

onMounted(() => {
  startGame()
})
</script>

<style scoped></style>
