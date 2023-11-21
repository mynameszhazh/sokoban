import { reactive, ref } from 'vue'
import { OtherEditType, type EditElement } from './editElement.ts'
import { EditElementImgSource } from '../img.ts'

export const keeperEditElement: EditElement = {
  type: OtherEditType.KEEPER,
  title: '玩家',
  imgSrc: EditElementImgSource.KEEPER
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
