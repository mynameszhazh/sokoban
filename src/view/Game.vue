<template>
  <div class="text-red-200">
    <MapCom />
    <PlacePoints />
    <Player />
    <Cargos />
    <!-- <div v-show="game.isWin">
      <button
        class="bg-red-500"
        @click="handleNextCheckpoint">
        下一关
      </button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import MapCom from '@/components/game/Map.vue'
import Player from '@/components/game/Player.vue'
import Cargos from '@/components/game/Cargos.vue'
import PlacePoints from '@/components/game/PlacePoints.vue'

import { startGame } from '@/game'
import { onMounted } from 'vue'

// const handleNextCheckpoint = () => {
//   game.nextCheckpoint()
//   startGame()
// }
onMounted(() => {
  startGame()
})
</script>

<style scoped></style>
