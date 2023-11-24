<template>
  <div
    class="absolute mapBlockSize"
    :style="positionStyle">
    <img
      class="block"
      :src="ImgSource.KEEPER" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue'
import { ImgSource } from '@/composables/img'

import {
  type Player,
  setupPlayer,
  moveUp,
  moveDown,
  moveLeft,
  moveRight
} from '@/game/player'
import { usePosition } from '@/composables/position'

const player = reactive({} as Player)
setupPlayer(player)
const { positionStyle } = usePosition(player)

function useMove() {
  function handleKeyup(e: KeyboardEvent) {
    switch (e.code) {
      case 'ArrowUp':
        moveUp()
        break
      case 'ArrowDown':
        moveDown()
        break
      case 'ArrowLeft':
        moveLeft()
        break
      case 'ArrowRight':
        moveRight()
        break
      default:
        break
    }
  }

  onMounted(() => {
    window.addEventListener('keyup', handleKeyup)
  })
  onUnmounted(() => {
    window.removeEventListener('keyup', handleKeyup)
  })
}

useMove()
</script>

<style scoped></style>
