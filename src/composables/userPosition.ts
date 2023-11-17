import { computed } from "vue";
import setting from '@/setting.ts'

const { MAP_BLOCK_SIZE } = setting

interface Position {
  x: number;
  y: number;
}

export function useUserPosition(position: Position) {
  const top = computed(() => {
    return position.y * MAP_BLOCK_SIZE;
  });

  const left = computed(() => {
    return position.x * MAP_BLOCK_SIZE;
  });

  const positionStyle = computed(() => {
    return [`top:${top.value}px`, `left:${left.value}px`];
  });

  return {
    positionStyle,
  };
}