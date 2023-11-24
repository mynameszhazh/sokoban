import { computed } from 'vue'
import setting from '@/setting.ts'

const { MAP_BLOCK_SIZE } = setting

export interface Position {
  x: number
  y: number
}

export function usePosition(position: Position) {
  const top = computed(() => {
    return position.y * MAP_BLOCK_SIZE
  })

  const left = computed(() => {
    return position.x * MAP_BLOCK_SIZE
  })

  const positionStyle = computed(() => {
    return [`top:${top.value}px`, `left:${left.value}px`]
  })

  return {
    positionStyle
  }
}

export function calcLeftPosition(position: Position) {
  return {
    x: position.x - 1,
    y: position.y
  }
}

export function calcRightPosition(position: Position) {
  return {
    x: position.x + 1,
    y: position.y
  }
}

export function calcUpPosition(position: Position) {
  return {
    x: position.x,
    y: position.y - 1
  }
}
export function calcDownPosition(position: Position) {
  return {
    x: position.x,
    y: position.y + 1
  }
}
