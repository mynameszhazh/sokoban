<template>
  <div class="text-red-200">
    <MapCom />
    <PlacePoints />
    <Player />
    <Cargos />
    <div v-show="game.isWin">
      <button
        class="bg-red-500"
        @click="handleNextCheckpoint">
        下一关
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MapCom from '@/components/game/Map.vue'
import Player from '@/components/game/Player.vue'
import Cargos from '@/components/game/Cargos.vue'
import PlacePoints from '@/components/game/PlacePoints.vue'

import { startGame, startNextLevel, setupGame, createGame } from '@/game'
import { onMounted, reactive } from 'vue'

const game = reactive(createGame({ level: 1 }))
setupGame(game)

const handleNextCheckpoint = () => {
  startNextLevel()
}

onMounted(() => {
  startGame()
})
</script>

<style scoped></style>
