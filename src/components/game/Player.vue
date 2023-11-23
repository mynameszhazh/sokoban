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
import { reactive } from 'vue'
import { ImgSource } from '@/composables/img'

import { type Player, setupPlayer } from '@/game/player'
import { usePosition } from '@/composables/position'

const player = reactive({} as Player)

setupPlayer(player)

const { positionStyle } = usePosition(player)
</script>

<style scoped></style>
