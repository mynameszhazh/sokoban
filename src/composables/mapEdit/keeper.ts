import { reactive, ref } from 'vue';
import { type EditElement } from './editElement.ts'
import KeeperImg from '@/assets/keeper.png'

export const keeperEditElement: EditElement = {
  type: 'keeper',
  title: '玩家',
  imgSrc: KeeperImg,
}

const keeper = reactive({
  x: 0,
  y: 0,
  data: keeperEditElement
})

const isShowKeeper = ref(false)

export function useKeeper() {
  function updateKeeperPosition(posX: number, posY: number) {
    keeper.x = posX
    keeper.y = posY
    showKeeper()
  }

  function hideKeeper() {
    isShowKeeper.value = false
  }

  function showKeeper() {
    isShowKeeper.value = true
  }

  return {
    hideKeeper,
    showKeeper,
    updateKeeperPosition,
    isShowKeeper,
    keeper
  }
}